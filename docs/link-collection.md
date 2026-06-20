# Link Collection Guide

This project stores spoiler-free official highlight links for each World Cup match.

## Link Slots

Each match can have up to four links:

- `KBS2 일반`
- `KBS2 숏`
- `JTBC 일반`
- `JTBC 숏`

Only store URLs. Do not expose video titles, thumbnails, scores, results, or upload times in the site UI.

## Sources

Use the Naver Sports World Cup video pages as the primary source.

The final URL may point to Naver Sports or CHZZK, but it must be an official video surfaced through the Naver World Cup video listing.

## Classification

Do not classify by URL shape.

Classify by video title:

- If the title contains `2분 하이라이트`, store it as `숏`.
- Other videos containing `하이라이트` are `일반`.

Classify broadcaster by title or channel name:

- `KBS2` in title or channel name -> KBS2 slot.
- `JTBC` in title or channel name -> JTBC slot.

## Match Mapping

Match videos by game name.

The title should include both team names, for example `아르헨티나 vs 알제리`.

Manual correction is allowed when official titles use slightly different country spellings, such as `콩고민주공화국` and `콩코민주공화국`.

## Storage

Store links by the match's stable `data-game-id` in `public/site.js`.

```js
const highlightLinks = {
  gameId: {
    kbsGeneral: "official general highlight URL",
    kbsShort: "official 2-minute highlight URL",
    jtbcGeneral: "official general highlight URL",
    jtbcShort: "official 2-minute highlight URL",
  },
};
```

After updating links, bump the `site.js` query string in `app/page.jsx` so deployed browsers do not keep stale cached link data.

## Workflow

1. Confirm the current match schedule and group assignments.
2. Check already-finished matches for newly published official highlights.
3. Fill links in chronological order by match date.
4. Review automated matches manually before committing, because automatic collection can miss videos or classify them incorrectly.
5. Build, commit, push, and confirm the deployed site serves the new `site.js` version.
