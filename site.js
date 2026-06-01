document.querySelectorAll("[data-repair-slider]").forEach((slider) => {
  const input = slider.querySelector("input[type='range']");
  if (!input) {
    return;
  }

  const update = () => slider.style.setProperty("--split", `${input.value}%`);
  input.addEventListener("input", update);
  update();
});

const packageByScope = {
  "one weak image or page": {
    label: "Recommended start: P1 Watermarked Preview",
    packageName: "P1 Watermarked Preview",
    budget: "$49 - $129",
  },
  "three to eight image refresh": {
    label: "Recommended start: P2 Refresh Sprint",
    packageName: "P2 Refresh Sprint",
    budget: "$199 - $349",
  },
  "new launch kit": {
    label: "Recommended start: P3 Launch Kit",
    packageName: "P3 Launch Kit",
    budget: "$399 - $699",
  },
  "monthly visual maintenance": {
    label: "Recommended start: P4 Visual Maintenance",
    packageName: "P4 Visual Maintenance",
    budget: "$199 - $399/mo",
  },
};

document.querySelectorAll("[data-request-builder]").forEach((form) => {
  const storageKey = "asterforge.requestBuilderDraft.v1";
  const recommendation = form.querySelector("[data-package-recommendation]");
  const output = form.querySelector("[data-generated-brief]");
  const button = form.querySelector("[data-copy-brief]");
  const status = document.querySelector("[data-copy-status]");

  const getBrief = () => {
    const data = Object.fromEntries(new FormData(form).entries());
    const packageInfo = packageByScope[data.scope] || packageByScope["one weak image or page"];
    const weakPoint = data.weakPoint?.trim() || "[paste weak image link or short description]";
    return {
      data,
      packageInfo,
      text: [
        "Aster Forge preview request",
        "",
        `Business type: ${data.businessType}`,
        `Current weak point: ${weakPoint}`,
        `Target buyer surface: ${data.surface}`,
        `Desired direction: ${data.direction}`,
        `Scope: ${data.scope}`,
        `Recommended package: ${packageInfo.packageName}`,
        `Expected budget frame: ${packageInfo.budget}`,
        "",
        "Please start with a watermarked proof or visual diagnosis before full-resolution delivery.",
      ].join("\n"),
    };
  };

  const update = () => {
    const { text, packageInfo, data } = getBrief();
    if (recommendation) {
      recommendation.textContent = packageInfo.label;
    }
    if (output) {
      output.textContent = text;
    }
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    Object.entries(saved).forEach(([name, value]) => {
      const field = form.elements.namedItem(name);
      if (field && typeof value === "string") {
        field.value = value;
      }
    });
  } catch (_) {
    localStorage.removeItem(storageKey);
  }

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  update();

  button?.addEventListener("click", async () => {
    const { text } = getBrief();
    try {
      await navigator.clipboard.writeText(text);
      if (status) {
        status.textContent = "Generated brief copied. Paste it into the chosen contact channel and attach one current image or link.";
      }
    } catch (_) {
      if (status) {
        status.textContent = "Copy failed in this browser. The generated brief above is ready to select and copy manually.";
      }
    }
  });
});

document.querySelectorAll("[data-prefill-request]").forEach((link) => {
  link.addEventListener("click", () => {
    const form = document.querySelector("[data-request-builder]");
    if (!form) {
      return;
    }

    const fields = {
      businessType: link.dataset.businessType,
      surface: link.dataset.surface,
      scope: link.dataset.scope,
      direction: link.dataset.direction,
    };

    Object.entries(fields).forEach(([name, value]) => {
      if (!value) {
        return;
      }
      const field = form.elements.namedItem(name);
      if (field) {
        field.value = value;
      }
    });

    form.dispatchEvent(new Event("change", { bubbles: true }));
    const status = document.querySelector("[data-copy-status]");
    if (status) {
      status.textContent = "Builder prefilled from the selected playbook. Add the weak image link or short description next.";
    }
  });
});

document.querySelectorAll("[data-save-draft]").forEach((button) => {
  const form = button.closest("form");
  const status = form?.querySelector("[data-account-status]");
  if (!form) {
    return;
  }

  button.addEventListener("click", () => {
    const formData = new FormData(form);
    const draft = Object.fromEntries(formData.entries());
    localStorage.setItem("asterforge.previewDraft", JSON.stringify(draft));
    if (status) {
      status.textContent = "Draft saved locally. It is not submitted until the client desk is connected.";
    }
  });
});
