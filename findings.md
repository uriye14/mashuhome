# Findings

## 2026-07-13: Hero recipe count

- Investigation in progress. The hero count will be compared with the `recipes` array in `index.html`.
- The `recipes` array contains 68 recipe objects; both the Hero copy and the first statistics card were stale at 67.
- Both displayed counts now have `data-recipe-count` and are populated from `recipes.length` at page load.

- Project root is `D:\YCH\AI\mashuhome`.
- `images\麻薯菜谱logo2.png` exists and appears to be the likely correct logo asset referenced by the user.
- `rg` cannot run in this environment due to Access denied; use `Select-String` for code search.
- Top navigation previously used `https://www.mashuhome.com/images/recipes/mi-bu-ding.jpg`, which is a recipe photo rather than the site logo.
- Footer and detail brand areas use `https://i.postimg.cc/d3Ykkdm6/ma-shu-cai-pulogo2.png`, matching the correct logo.
- Local logo asset dimensions are 676x556 and mode RGBA.
