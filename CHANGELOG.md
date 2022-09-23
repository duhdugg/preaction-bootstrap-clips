# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0-alpha.23]

### Changed
- ⬆️ dependency upgrades,  including but not limited to:
  * `bootstrap v5.2.1`
  * `react v18.2.0`

### Fixed
- ⚡ there should no longer be hydration mismatches when using server-side rendering, as
  element ids are now generated using the `useId` hook available in React v18+.
  Previously, `Math.random` was being used to generate the ids.
