# Frontend folder structure

Restructured 2026-11-15. Files are grouped by feature, so everything for one part of the product sits in one folder.

## Layout

```
src/
  main.js                  # app entry; global CSS (Tailwind, Font Awesome) is imported here only
  App.vue                  # NavBar + RouterView
  router/index.js          # all routes
  assets/
    main.css
    img/                   # images, named by what they are used for
      unused/              # images no component imports; delete when sure
  components/
    layout/                # shared by every page
      NavBar.vue
      SiteFooter.vue
  features/
    home/
      views/HomeView.vue
      components/          # HomeHero, HomeTaglines, HomeActionCards, HomeFeatures
    properties/
      views/               # BuyView, SellView, RentView
      components/          # SellOverview, SaleListings
    agents/
      views/AgentView.vue
    auth/
      views/               # SignInView, CreateAccountView
    admin/
      components/AdminLayout.vue
      views/               # UserManagementView, ContentManagementView, SiteSettingsView
```

## Rules

1. A **view** is a page that a route points to. It lives in `features/<feature>/views/` and its name ends in `View`.
2. A **component** used by one feature lives in `features/<feature>/components/`.
3. A component used by two or more features lives in `src/components/` (`layout/` for page chrome, `ui/` for buttons, modals and similar).
4. Only `router/index.js` imports views. Views import components. Components do not import views.
5. Global CSS is imported once, in `main.js`.
6. File names are PascalCase for `.vue` files and kebab-case for images.

## Where new code goes

These folders do not exist yet. Create them when the roadmap reaches that step.

| New code | Location |
|---|---|
| API client (`fetch` wrapper, token handling) | `src/api/client.js` |
| API calls for one feature | `src/features/<feature>/api.js` |
| Pinia store for one feature | `src/features/<feature>/store.js` (auth first: `features/auth/store.js`) |
| Shared composables | `src/composables/` |
| Shared UI components | `src/components/ui/` |
| `PropertyCard.vue`, property detail page, My Listings, Favourites | `src/features/properties/` |
| Admin Listings and Reports pages | `src/features/admin/views/` |
| FastAPI backend | `backend/` at the repo root |

## Old path to new path

[ROADMAP.md](ROADMAP.md) was written before the restructure and uses the old names.

| Old | New |
|---|---|
| `components/NavBar.vue` | `components/layout/NavBar.vue` |
| `components/About.vue` | `components/layout/SiteFooter.vue` |
| `views/Home.vue` | `features/home/views/HomeView.vue` |
| `components/Hero.vue` | `features/home/components/HomeHero.vue` |
| `components/Trans.vue` | `features/home/components/HomeTaglines.vue` |
| `components/Cards.vue` | `features/home/components/HomeActionCards.vue` |
| `components/Built.vue` | `features/home/components/HomeFeatures.vue` |
| `components/BuyerUpper.vue` + `views/BuyView.vue` | `features/properties/views/BuyView.vue` |
| `views/SellView.vue` | `features/properties/views/SellView.vue` |
| `components/SellerUpper.vue` | `features/properties/components/SellOverview.vue` |
| `components/Seller.vue` | `features/properties/components/SaleListings.vue` |
| `components/RentUpper.vue` + `views/RentView.vue` | `features/properties/views/RentView.vue` |
| `components/Agent.vue` + `views/AgentView.vue` | `features/agents/views/AgentView.vue` |
| `components/SigninU.vue` + `views/SigninView.vue` | `features/auth/views/SignInView.vue` |
| `components/CreateAccount.vue` + `views/CreateAccView.vue` | `features/auth/views/CreateAccountView.vue` |
| `components/Admin.vue` + `views/AdminView.vue` | `features/admin/components/AdminLayout.vue` |
| `components/AUserManagement.vue` | `features/admin/views/UserManagementView.vue` |
| `components/AContentManagement.vue` | `features/admin/views/ContentManagementView.vue` |
| `components/ASiteSetting.vue` | `features/admin/views/SiteSettingsView.vue` |

Where two old files are listed, the view was a wrapper that only rendered the component, so the two were merged.

| Old image | New image |
|---|---|
| `R.jpg` | `logo.jpg` |
| `bgl.jpg` | `hero-background.jpg` |
| `HomeS.jpg` | `listing-sample-1.jpg` |
| `homep.jpg` | `listing-sample-2.jpg` |
| `asdf.jpg` | `action-cards-background.jpg` |
| `AllRight.jpg` | `buy-card.jpg` |
| `thinking.jpg` | `area-placeholder.jpg` |
| `Hasab.jpg` | `avatar-placeholder.jpg` |
| `M.jpg` | `rent-furnished.jpg` |
| `spouse.jpg` | `rent-new-spouses.jpg` |
| `healthy.jpg` | `rent-healthy-community.jpg` |
| `giphy.webp` | `agent-banner.webp` |
| `desi.jpg`, `dnn.jpg`, `giff.gif`, `Last.jpg` | `unused/` |
