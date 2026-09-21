# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it
responsibly. **Do not open a public issue.**

### How to Report

1. Go to the [Security tab](https://github.com/Hexabytee/clothing/security) of this repository.
2. Click **"Report a vulnerability"**.
3. Fill in the details of the vulnerability.
4. Submit the report.

The repository owner will review your report and respond as soon as possible.

## Response Timeline

- **Acknowledgment**: Within 48 hours of submission.
- **Assessment**: Within 1 week.
- **Resolution**: Depends on severity, but we aim to resolve critical issues within 2 weeks.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | Yes       |

## Scope

This security policy applies to the code in this repository. Since this is a
static frontend site with no backend, database, or authentication system, the
primary security concerns are:

- XSS (Cross-Site Scripting) via user input in forms
- CDN supply chain risks
- Insecure external links

## Best Practices

- This site does not collect or store personal data.
- The newsletter form does not persist data.
- All external resources (fonts, icons) are loaded from reputable CDNs.
