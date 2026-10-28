# Impostor

A dark tabletop word game for 4–6 players. Each player shares a related word, but one impostor only knows the broad category. Compare the words, discuss, and vote.

## Play modes

- Solo: one human and scripted practice bots.
- With friends: pass one device around for private cards and votes. Everyone sees their card before the related-word round begins.

This version does not include online rooms or cross-device multiplayer. Game state and session scores reset when the page reloads. Shared-device privacy depends on other players looking away during card reveals and voting.

## Local preview

Requires Node.js 20 or later. No dependencies or API keys are needed.

```sh
npm start
```

Open the local address printed by the preview server.

```sh
npm test
```

## Render hosting

Create a Static Site from this repository, using the `main` branch, build command `npm run build`, and publish directory `dist`. A matching Blueprint is included in `render.yaml`.

## Files

- `dist/`: complete static website, styles, JavaScript, SVG logo and generated shadow-player artwork.
- `engine.test.mjs`: vote, scoring, related-word validation and word-pack tests.
- `DESIGN.md`: current rules and design notes.

Artwork was created with AI image generation. All player seats use the same anonymous shadow figure with glasses and cards.
