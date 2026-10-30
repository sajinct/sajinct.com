# Sajin C T — Engineering & Ideas

Personal portfolio and engineering journal of Sajin C T: selected projects, writing, and experience building enterprise software with .NET, Angular, and Azure.

## Local preview

Requires Node.js 22 or later. No dependency installation is needed.

```sh
node scripts/preview.cjs
```

Open http://127.0.0.1:4173.

## Publishing

GitHub Actions builds and publishes the site whenever changes are pushed to `main`. The repository's Pages publishing source is **GitHub Actions**. You can also start the workflow manually from the Actions tab.

Only the public files in `dist/` are deployed. The build uses GitHub Pages' URL for canonical links, social metadata, and the sitemap. Relative asset links work under the repository subpath.

```sh
node scripts/build.cjs
```

For a different deployment address, set `SITE_URL` when building. Without it, metadata uses `https://sajinct.com`.

## Editing

- `index.html`: page content and metadata
- `css/style.css`: layout, colors, and responsive styling
- `js/main.js`: mobile navigation and footer year
- `assets/`: favicon and existing social preview image

The `.openai/hosting.json` file records the separate private Sites review deployment; GitHub Pages does not use it.

## RustDesk downloads

### Inzoft installer bundle

[Download Inzoft-RustDesk.zip](https://sajinct.com/assets/Inzoft-RustDesk.zip).
This is the original provided ZIP, including `Install.cmd`, the installer configured
for Inzoft, its README, license, and verification information.

### Official installer

The unmodified official RustDesk 1.5.0 installer for Windows 64-bit is hosted at
[rustdesk-1.5.0-x86_64.exe](https://sajinct.com/assets/rustdesk-1.5.0-x86_64.exe).
The existing build copies it from `assets/` into the published site.

- Official release: https://github.com/rustdesk/rustdesk/releases/tag/1.5.0
- Source and license information: [assets/rustdesk-1.5.0-source.txt](assets/rustdesk-1.5.0-source.txt)
- SHA-256: `8555777215510d83d2d61c9dc984e4fcc838bd7e79f9d18a42585431f5e8bb47`
