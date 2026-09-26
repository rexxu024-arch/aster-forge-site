const packageByScope = {
  "single curated gift or poster": {
    label: "Recommended start: P1 Signature Direction",
    packageName: "P1 Signature Direction",
    budget: "$49 - $129",
  },
  "three-surface gift or product set": {
    label: "Recommended start: P2 Presentation Set",
    packageName: "P2 Presentation Set",
    budget: "$199 - $349",
  },
  "new launch kit": {
    label: "Recommended start: P3 Launch Kit",
    packageName: "P3 Launch Kit",
    budget: "$399 - $699",
  },
  "collection or recurring art direction": {
    label: "Recommended start: P4 Collection Direction",
    packageName: "P4 Collection Direction",
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
    const packageInfo = packageByScope[data.scope] || packageByScope["single curated gift or poster"];
    const projectContext = data.weakPoint?.trim() || "[recipient or buyer, occasion, references, cultural cues and intended use]";
    return {
      data,
      packageInfo,
      text: [
        "Aster Forge design brief",
        "",
        `Request type: ${data.businessType}`,
        `Starting context: ${projectContext}`,
        `Intended surface: ${data.surface}`,
        `Desired direction: ${data.direction}`,
        `Delivery scope: ${data.scope}`,
        `Recommended package: ${packageInfo.packageName}`,
        `Expected budget frame: ${packageInfo.budget}`,
        "",
        "Please confirm the design direction and acceptance boundary before final production files are released.",
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
        status.textContent = "Generated brief copied. Paste it into the chosen contact channel and attach references or a short context note.";
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
      status.textContent = "Builder prefilled from the selected playbook. Add the recipient, buyer context or reference note next.";
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
