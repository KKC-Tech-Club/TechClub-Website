# Tech Club Website

A collaborative website built by Tech Club members to practice Git, GitHub, and open-source workflows.

---

## 🚀 How to Contribute (Quick Start)

1. Open this repo inside the **KKC TechClub organization**.

2. Create a new branch for your work:

   ```bash
   git checkout -b feature/your-name-card
   ```

   Example branch name: `feature/jane-doe-card`

3. Edit `data/members.json` to add yourself (see schema below).

4. (Optional) Add your headshot to `/images` and reference it in your entry.

5. Run locally with **Codespaces → Live Server** to preview your change.

6. Commit & push your branch:

   ```bash
   git add .
   git commit -m "feat: add Jane Doe card"
   git push --set-upstream origin feature/jane-doe-card
   ```

7. Open a **Pull Request** from your branch → `main`.

8. Ask a peer (or coordinator) for review. Once approved, your PR will be merged—and the live site updates automatically via GitHub Pages.

---

## 🖥 Dev in Codespaces

* Open this repo → **Code** → **Create codespace**.
* In VS Code (in the browser), install the **Live Server** extension.
* Right-click `index.html` → **Open with Live Server** to preview.

---

## 📂 Project Structure

```
/data/members.json   ← all member entries
/images/             ← headshots, logo
/styles/main.css     ← site styles
/scripts/main.js     ← JS logic
index.html           ← homepage
about.html           ← about page
```

---

## 📜 Member JSON Schema

Each member entry in `data/members.json` should look like this:

```json
{
  "name": "Jane Doe",
  "role": "Member",
  "interests": ["AI", "Web", "Cyber"],
  "github": "janedoe",
  "image": "images/jane.jpg"
}
```

⚠️ Watch commas and quotes—invalid JSON will break the site.

---

## 🤝 Code of Conduct

We follow the Contributor Covenant (see `CODE_OF_CONDUCT.md`).
Be kind, respectful, and collaborative.

---

## ✅ Quick Rules

* Always create a branch (`feature/your-name-card`) before making changes.
* Keep PRs small and focused.
* One approval required before merging into `main`.
* Never push directly to `main`.

---

🎉 Once your PR is merged, check out the live site on GitHub Pages to see your card!
