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

### Recommended: single vendor-signed Inzoft installer

[Download the single EXE](https://sajinct.com/assets/rustdesk-host%3Drustdesk.inzoft.com%2Ckey%3D1tReBzyI0r45BmcCQf5XvZsGQldYOklYNjmtHUrI6tI%3D%2C-install.exe).

This is the unmodified official RustDesk 1.5.0 Windows x64 executable, with a valid
**PURSLANE** vendor signature. Its filename configures `rustdesk.inzoft.com` and
the server public key automatically. **Keep the complete downloaded filename**
until installation finishes. Run the EXE and complete the standard installation;
no ZIP or command script is needed. The server supplies the relay address.

If an existing installation has an explicit old Relay Server value, clear it or
set it to `rustdesk.inzoft.com:21117`. Test a full installation and remote session
on a Windows test computer before wider distribution. Signing does not guarantee
the absence of SmartScreen warnings.

The EXE's SHA-256 is
`8555777215510d83d2d61c9dc984e4fcc838bd7e79f9d18a42585431f5e8bb47`.
It matches the official original binary; only its filename differs.

### Optional ZIP bundle

[Download Inzoft-RustDesk.zip](https://sajinct.com/assets/Inzoft-RustDesk.zip).
This ZIP contains the unmodified official RustDesk Windows x64 installer, configured
for `rustdesk.inzoft.com` through its filename. The executable retains its valid
**PURSLANE** vendor signature. The ZIP itself and the optional command launcher are
not Authenticode-signed. No additional signing certificate or subscription is required.

Extract the entire ZIP, run the included EXE (or `Install.cmd`), and complete the
standard installation. **Keep the EXE filename unchanged** until installation finishes;
its name supplies the hostname and public key. The ID server supplies the relay
address automatically. Existing installations with an explicit old relay address
should have that field cleared or changed to `rustdesk.inzoft.com:21117`.

The bundle includes instructions, the upstream licence, and verification information.
Its ZIP checksum is recorded in [assets/Inzoft-RustDesk.sha256](assets/Inzoft-RustDesk.sha256).
The bundled executable's signature, publisher, checksum, and configuration were
reverified on 30 October 2026. A complete Windows installation and remote session
still need testing. Signing does not guarantee the absence of SmartScreen warnings.

The custom unsigned setup prototype and its source are retained locally outside
public assets. The selected download is the single vendor-signed EXE above.

### Official installer

The unmodified official RustDesk 1.5.0 installer for Windows 64-bit is hosted at
[rustdesk-1.5.0-x86_64.exe](https://sajinct.com/assets/rustdesk-1.5.0-x86_64.exe).
The existing build copies it from `assets/` into the published site.

- Official release: https://github.com/rustdesk/rustdesk/releases/tag/1.5.0
- Source and license information: [assets/rustdesk-1.5.0-source.txt](assets/rustdesk-1.5.0-source.txt)
- SHA-256: `8555777215510d83d2d61c9dc984e4fcc838bd7e79f9d18a42585431f5e8bb47`
