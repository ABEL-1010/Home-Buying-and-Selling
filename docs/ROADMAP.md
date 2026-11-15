# Gojoy / Yeha Homes — what exists and what to do next

Written 2026-11-15 after reading every file in the repo.
Target stack: Vue 3 (existing) + FastAPI + PostgreSQL, with all dummy data replaced by real data.

Note: the frontend folders were restructured after this was written. File names below are the old ones. [STRUCTURE.md](STRUCTURE.md) maps each old path to its new path. Bug 7 (`Base_URL`) was fixed during the restructure.

## 1. Where the project stands

The project is a frontend-only prototype. There is no backend, no database, no HTTP client and no shared state. Every list on screen is a hardcoded array inside a component, and every form either logs to the console or does nothing.

| Item | State |
|---|---|
| Stack | Vue 3.5, Vite 6, vue-router 4, Tailwind 3, Font Awesome 6 |
| Build | `npm run build` passes (checked 2026-11-15) |
| Git | One commit (`8a79175`, 2025-11-04), clean tree, remote `origin` on GitHub |
| Local tools | Node 26, Python 3.14, PostgreSQL 18 are already installed |
| Backend | None |
| Tests | None |

### Pages and what each one really does

| Route | Component | What works | What is fake or missing |
|---|---|---|---|
| `/` | Hero, Trans, Cards, Built, About | Layout | Search only logs to the console. Card buttons link to `jobs.html` and `add-job.html`, which do not exist. |
| `/Buy` | BuyerUpper | Text search over name and location | 4 hardcoded properties. Type, bedroom and bathroom filters are not connected. No detail page. |
| `/Sell` | SellerUpper, Seller | Form layout | Submit only logs. Image is never uploaded or previewed. The "Available Properties" counts are undefined variables. `Seller.vue` is an empty "Homes for Sale" header. |
| `/Rent` | RentUpper | Layout | `submitForm` is empty. No rental listings are shown. City and type links go nowhere. |
| `/agent` | Agent | Layout | Two hardcoded agents, one named "Name Here". One section still says "Your Target Section / Content goes here...". |
| `/Signin` | SigninU | Form layout | No password. "Admin" means the email equals a hardcoded string. Everyone else is sent to `/Sell`. |
| `/Create-account` | CreateAccount | Form layout | Emits an event that nothing listens to. No password. Role is a free-text field. |
| `/admin` | Admin | Sidebar and nested routes | Open to anyone who types the URL. Admin name is hardcoded. Log Out does nothing. |
| `/admin/user-management` | AUserManagement | Add, edit, delete in memory | 3 hardcoded users. Changes are lost on refresh. |
| `/admin/content-management` | AContentManagement | Add, edit, delete in memory | 2 hardcoded posts. File is never uploaded. Posts appear nowhere on the site. |
| `/admin/site-settings` | ASiteSetting | Nothing | A broken copy of user management that uses variables and a `UserForm` component that do not exist. |

### Bugs to fix regardless of the backend

1. `NavBar.vue` links to `/Favourites`, and `Admin.vue` links to `/admin/analytics`. Neither route exists, so both show a blank page.
2. `CreateAccount.vue` links to `/sign-in`. The route is `/Signin`.
3. `RentUpper.vue` `onFileChange` uses `imagePreview`, which is never declared. It also contains an invalid `</br>` tag.
4. `SellerUpper.vue` renders `homeCount`, `landCount`, `commercialCount` and four more counts that are never defined.
5. `BuyerUpper.vue` uses `pi pi-map-marker`, a PrimeIcons class. PrimeIcons is not installed, so use `fas fa-map-marker-alt`.
6. `BuyerUpper.vue` offers "House" in the filter, but the data says "Home". Prices are strings such as `"500,000 birr"`, so they cannot be sorted or filtered.
7. `router/index.js` reads `import.meta.env.Base_URL`. The correct name is `BASE_URL`.
8. `SigninU.vue` navigates with `window.location.href`, which reloads the whole app. Use `router.push`.
9. `Built.vue` contains broken characters (`Donâ€™t`), and all 8 feature cards carry the same sentence.
10. `About.vue` repeats the same contact block three times, and it is the footer only on the home page.
11. Branding is mixed: "Gojoy" in the nav bar, "Yeha Homes" in the hero and the logo alt text, "Vite App" in the browser tab. `index.html` has `lang=""`.
12. `tailwind.config.js` sets the font to Poppins, but the font is never loaded.
13. `healthy.jpg` is 1 MB and `giphy.webp` is 2 MB. `desi.jpg`, `dnn.jpg`, `giff.gif` and `Last.jpg` are not used.
14. `README.md` is still the Vite template text.
15. A personal phone number and email are hardcoded in `About.vue` and `Agent.vue`, and the repo has a GitHub remote. Move them to site settings (see below).

## 2. Decisions to make first

These change the schema, so settle them before writing code. My recommendation is given for each.

| Decision | Recommendation | Why |
|---|---|---|
| Product name | Pick one of Gojoy or Yeha Homes | It is used in the title, nav bar, hero and emails. |
| How users sign in | Email + password, JWT access token | The current form has no secret at all. Phone OTP needs a paid SMS gateway, so add it later if wanted. |
| Roles | `buyer`, `seller`, `agent`, `admin` | These match the existing pages. A user picks buyer, seller or agent at sign-up. Admin is set only in the database. |
| Are listings moderated? | Yes: new listings are `pending` until an admin approves | The comment in `Seller.vue` says listings should come from the admin page. |
| Sale and rent | One `properties` table with `listing_type` = `sale` or `rent` | The Sell and Rent forms have the same fields. |
| Image storage | Local `backend/uploads/` folder served by FastAPI | Simplest to start. Move to S3 or Cloudinary when deploying. |
| Repo layout | Keep the frontend at the repo root and add `backend/` | No files have to move, and one repo holds both. |

## 3. Database schema (PostgreSQL)

```
users            id, name, email (unique), phone, password_hash,
                 role (buyer|seller|agent|admin), is_active, created_at

cities           id, name                       -- Mekelle, Adigrat, Axum, Adwa, ...
areas            id, city_id -> cities, name,   -- 70 Kare, Adihawsi, Diaspora, ...
                 market_note                    -- the "Home Values" text on /Sell

properties       id, owner_id -> users, area_id -> areas,
                 listing_type (sale|rent),
                 property_type (house|apartment|land|commercial),
                 land_use (residential|commercial|industrial, nullable),
                 title, description, address,
                 price NUMERIC(14,2),           -- ETB; monthly when listing_type = rent
                 bedrooms, bathrooms, area_sqm,
                 status (pending|approved|rejected|sold|rented),
                 created_at, updated_at

property_images  id, property_id -> properties, file_path, is_cover, sort_order

favourites       user_id -> users, property_id -> properties, created_at
                 PRIMARY KEY (user_id, property_id)

inquiries        id, property_id -> properties, sender_id -> users,
                 message, created_at            -- "contact the owner"

agent_profiles   user_id -> users (PK), city_id -> cities, bio, photo_path, is_verified

posts            id, author_id -> users, title, content, file_path,
                 is_published, created_at       -- admin Content Management

site_settings    key (PK), value                -- contact phone, email, address, site name
```

Indexes: `properties (status, listing_type, property_type)`, `properties (area_id)`, `properties (price)`.

Where each piece of dummy data goes:

| Dummy data today | Replaced by |
|---|---|
| `properties` array in `BuyerUpper.vue` | `properties` + `property_images` |
| Area dropdown and "Homes in Diaspora are expensive" in `SellerUpper.vue` | `areas.market_note` |
| Undefined counts in `SellerUpper.vue` | `GET /stats/properties` |
| City and type links in `RentUpper.vue` | `cities`, and query filters on `/properties` |
| Agent cards in `Agent.vue` | `agent_profiles` joined to `users` |
| `users` array in `AUserManagement.vue` | `users` |
| `posts` array in `AContentManagement.vue` | `posts` |
| Contact details in `About.vue` and `Agent.vue` | `site_settings` |
| `adminEmail` and `adminName` constants | `users.role` and `GET /auth/me` |

## 4. Backend (FastAPI)

### Layout

```
backend/
  app/
    main.py            # app, CORS, router includes, static mount for uploads
    config.py          # pydantic-settings, reads .env
    database.py        # engine and session
    models/            # SQLAlchemy models, one file per table group
    schemas/           # Pydantic request and response models
    routers/           # auth, properties, favourites, inquiries, agents,
                       # areas, posts, stats, admin
    core/security.py   # password hashing, JWT, get_current_user, require_role
  alembic/             # migrations
  seed.py              # cities, areas, first admin user
  tests/
  requirements.txt
  .env.example
```

Packages: `fastapi`, `uvicorn[standard]`, `sqlalchemy` 2.x, `psycopg[binary]`, `alembic`, `pydantic-settings`, `pwdlib[argon2]`, `pyjwt`, `python-multipart`, `pytest`, `httpx`.

Python 3.14 is very new. If a package fails to install, create the virtual environment with Python 3.12 or 3.13.

### Endpoints

| Method and path | Access | Purpose |
|---|---|---|
| `POST /auth/register` | public | Create account (name, email, phone, password, role) |
| `POST /auth/login` | public | Return a JWT |
| `GET /auth/me` | signed in | Current user |
| `GET /properties` | public | Approved listings. Filters: `listing_type`, `property_type`, `city_id`, `area_id`, `min_price`, `max_price`, `bedrooms`, `bathrooms`, `q`, `page`, `page_size` |
| `GET /properties/{id}` | public | One listing with images and owner contact |
| `POST /properties` | seller, agent | Create a listing (status `pending`) |
| `PUT /properties/{id}`, `DELETE /properties/{id}` | owner, admin | Edit or remove |
| `POST /properties/{id}/images` | owner | Upload images (multipart) |
| `GET /me/properties` | signed in | My own listings and their status |
| `GET /me/favourites`, `POST` and `DELETE /properties/{id}/favourite` | signed in | Favourites |
| `POST /properties/{id}/inquiries` | signed in | Message the owner |
| `GET /cities`, `GET /areas` | public | Dropdown data and market notes |
| `GET /agents` | public | Verified agents |
| `GET /posts` | public | Published posts |
| `GET /stats/properties` | public | Counts by property type and land use |
| `GET /settings` | public | Contact details and site name |
| `GET`, `POST`, `PUT`, `DELETE /admin/users` | admin | User management |
| `GET /admin/properties?status=pending`, `PATCH /admin/properties/{id}/status` | admin | Approve or reject listings |
| `POST`, `PUT`, `DELETE /admin/posts` | admin | Content management |
| `PUT /admin/settings` | admin | Site settings |
| `GET /admin/reports` | admin | Totals for the Reports page |

## 5. Frontend changes

Add:

- `pinia` for the auth store (user, token, login, logout).
- `src/api/client.js`: one `fetch` or axios wrapper that reads `VITE_API_URL` and attaches the token.
- `.env.development` with `VITE_API_URL=http://localhost:8000`.
- Router guards: `meta.requiresAuth` and `meta.role`, enforced in `router.beforeEach`.
- New pages: property detail (`/properties/:id`), Favourites, My Listings, admin Listings (approve or reject), admin Reports.
- A shared `PropertyCard.vue` used by Buy, Rent, Favourites and My Listings.
- Loading, empty and error states on every list.

Change per file:

| File | Change |
|---|---|
| `SigninU.vue` | Email + password, call `/auth/login`, redirect by role |
| `CreateAccount.vue` | Add password, role becomes a select, call `/auth/register` |
| `NavBar.vue` | Show Sign in or the user menu and Log out. Show Admin only to admins. Add a mobile menu. |
| `Hero.vue` | Search goes to `/Buy?q=...` |
| `Cards.vue` | Replace `jobs.html` links with `RouterLink` to `/Buy`, `/Sell`, `/Rent` |
| `BuyerUpper.vue` | Load from `/properties?listing_type=sale`. Connect all filters. Add pagination. |
| `SellerUpper.vue` | Post to `/properties` and upload images. Load areas and counts from the API. Require sign-in. |
| `Seller.vue` | Either show the user's own listings or delete the file |
| `RentUpper.vue` | Show rental listings from the API. City and type links become filters. Fix the form. |
| `Agent.vue` | Load agents from `/agents`. Write the missing "Free Agent" section. |
| `AUserManagement.vue`, `AContentManagement.vue` | Replace the in-memory arrays with API calls |
| `ASiteSetting.vue` | Rewrite as a real settings form |
| `About.vue` | Rename to `Footer.vue`, move into `App.vue`, read contact details from `/settings` |

## 6. Order of work

Each phase ends with something that runs.

**Phase 0 — Clean up (about 1 day)**
- [ ] Decide the items in section 2.
- [ ] Fix the bugs in section 1 that do not need a backend (1, 2, 3, 5, 7, 9, 11, 12, 13, 14).
- [ ] Commit.

**Phase 1 — Backend skeleton**
- [ ] Create the `gojoy` database and a database user in PostgreSQL.
- [ ] Create `backend/`, a virtual environment, `requirements.txt`, `.env` and `.env.example`. Add `.env`, `.venv/` and `backend/uploads/` to `.gitignore`.
- [ ] `main.py` with CORS for `http://localhost:5173` and a `/health` route.
- [ ] SQLAlchemy models for every table in section 3, and the first Alembic migration.
- [ ] `seed.py`: cities, areas, and one admin user.

**Phase 2 — Auth**
- [ ] Register, login, `/auth/me`, password hashing, JWT, `require_role`.
- [ ] Frontend: Pinia auth store, API client, sign-in and create-account forms, router guards, nav bar state.
- [ ] `/admin` is unreachable unless the user is an admin.

**Phase 3 — Listings (the core of the product)**
- [ ] Properties create, read, update, delete, with filters and pagination.
- [ ] Image upload.
- [ ] Frontend: Sell form, Buy page, Rent page, property detail page, My Listings.

**Phase 4 — Admin**
- [ ] User management, listing approval, content management, site settings, reports.

**Phase 5 — Remaining features**
- [ ] Favourites, inquiries, agents page, home page search, stats counts, published posts shown on the site.

**Phase 6 — Real content and polish**
- [ ] Replace placeholder text and stock images. Write the real copy for Built, Trans, Rent and Agent.
- [ ] Enter the real cities, areas, market notes, agents and first listings.
- [ ] Mobile layout check on every page (the Sell page uses fixed `w-1/4` and `w-3/4` columns).
- [ ] Compress large images.

**Phase 7 — Tests and deploy**
- [ ] Pytest for auth, permissions and property filters.
- [ ] Production settings: secret key, allowed origins, HTTPS, database backups.
- [ ] Deploy the frontend as static files and the API with uvicorn behind a reverse proxy. Move uploads to object storage.
- [ ] Rewrite `README.md` with setup steps for both halves.

## 7. Replacing the dummy data safely

1. Build the endpoint and seed real rows first.
2. Switch the component to the API.
3. Delete the hardcoded array in the same commit, so no page can fall back to fake data.
4. When Phase 5 is done, search `src/` for `ref([` and for the phone number to confirm nothing hardcoded is left.
