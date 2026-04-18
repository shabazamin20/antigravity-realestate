# Antigravity Real Estate — Full Stack Web Application

A production-ready real estate portfolio web application built with Spring Boot, MySQL, and a plain HTML/CSS/JS frontend. Features bilingual support (English & Arabic), an admin panel, and is fully deployed on Railway.

---

## 🌐 Live URLs

| Service | URL |
|---|---|
| **Live Website** | https://antigravity-backend-production-affb.up.railway.app |
| **Admin Panel** | https://antigravity-backend-production-affb.up.railway.app/admin.html |
| **API Base** | https://antigravity-backend-production-affb.up.railway.app/api/projects |

**Admin Credentials:** `admin` / `admin123`

---

## 📁 GitHub Repository

| Detail | Value |
|---|---|
| **Repository** | https://github.com/shabazamin20/antigravity-realestate |
| **Username** | shabazamin20 |
| **Branch** | main |
| **Visibility** | Public |

---

## 🚂 Railway Deployment

| Detail | Value |
|---|---|
| **Platform** | Railway (railway.app) |
| **Account Email** | shabazamin20@gmail.com |
| **Project Name** | antigravity-realestate |
| **Project ID** | a4216a9e-dfbd-4fd9-8083-f660022b4c6a |
| **Environment** | production |
| **Environment ID** | 0f0f3166-4018-420d-9a26-40dfe5a8e4ea |
| **Workspace** | shabazamin20's Projects |
| **Workspace ID** | 3e36fd6f-c901-4b77-af60-98cd326dd07d |

### Railway Services

| Service | Service ID | Description |
|---|---|---|
| **antigravity-backend** | a088d930-c070-4796-a7c1-3a078d1089d0 | Spring Boot app (serves frontend + API) |
| **MySQL** | d0b4b55d-f448-43b4-81cb-3d5152d4b9c6 | MySQL 8.0 database |

### Railway Environment Variables (Backend)

| Variable | Value |
|---|---|
| `SPRING_DATASOURCE_URL` | `jdbc:mysql://mysql.railway.internal:3306/antigravity?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true` |
| `SPRING_DATASOURCE_USERNAME` | `antigravity` |
| `SPRING_DATASOURCE_PASSWORD` | `antigravity123` |
| `SPRING_JPA_HIBERNATE_DDL_AUTO` | `update` |
| `PORT` | Auto-injected by Railway |

### Railway MySQL Variables

| Variable | Value |
|---|---|
| `MYSQL_DATABASE` | `antigravity` |
| `MYSQL_USER` | `antigravity` |
| `MYSQL_PASSWORD` | `antigravity123` |
| `MYSQL_ROOT_PASSWORD` | `root` |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Java 8, Spring Boot 2.7.18 |
| **Security** | Spring Security (form login) |
| **Database** | MySQL 8.0 (local) / MySQL on Railway (production) |
| **ORM** | Spring Data JPA / Hibernate |
| **Frontend** | Plain HTML5, CSS3, Vanilla JavaScript (ES5) |
| **UI Framework** | Bootstrap 5.3 |
| **Fonts** | Inter (English), Tajawal (Arabic) via Google Fonts |
| **Build Tool** | Apache Maven 3.9.9 |
| **Deployment** | Railway (full stack — backend + frontend + database) |

---

## ✨ Key Features

### Public Website
- **Homepage** with hero section, project grid, how-it-works steps, CTA strip, and contact section
- **Project cards** with image, status badge (Ongoing / Completed), location, and View Details link
- **Filter tabs** — All / Ongoing / Completed
- **Live statistics** — total projects, ongoing, completed counts in hero section
- **Project detail page** (`/project.html?id=X`) with hero image, description, info sidebar, and related projects
- **Bilingual support** — full English ↔ Arabic (Saudi Arabic, RTL layout) toggle on every page

### Admin Panel (`/admin.html`)
- Protected by Spring Security login (`admin` / `admin123`)
- **Dashboard tab** — stat cards (total, ongoing, completed, with images) + recent projects table
- **Add Project tab** — form with name, description, location, status, image upload (drag & drop)
- **Manage Projects tab** — full table with search, edit, delete with confirmation modal
- **Image upload** to server (`/uploads/` directory)

### Arabic / RTL Support
- Custom i18n engine (`i18n.js`) with `localStorage` persistence
- All static UI text translated to Saudi Arabic (formal, polite grammar)
- Dynamic project content translated via Arabic database fields (`nameAr`, `descriptionAr`, `locationAr`)
- RTL layout flips sidebar, breadcrumbs, cards, and typography using `dir="rtl"` + `.rtl-mode` CSS class
- Browser auto-translate blocked via `<meta name="google" content="notranslate">` and `translate="no"`

---

## 🗄️ Database Schema

```sql
CREATE TABLE projects (
  id             BIGINT AUTO_INCREMENT PRIMARY KEY,
  name           VARCHAR(255) NOT NULL,
  name_ar        VARCHAR(255),
  description    TEXT,
  description_ar TEXT,
  location       VARCHAR(255) NOT NULL,
  location_ar    VARCHAR(255),
  status         VARCHAR(50)  NOT NULL,   -- 'Ongoing' | 'Completed'
  image_url      VARCHAR(500)
);
```

8 mock projects are seeded automatically on first startup via `DataInitializer.java`.

---

## 📂 Project Structure

```
Antigravity/
├── src/
│   └── main/
│       ├── java/com/realestate/
│       │   ├── RealEstateApplication.java       # Entry point
│       │   ├── config/
│       │   │   ├── SecurityConfig.java          # Spring Security + CORS
│       │   │   ├── WebConfig.java               # Static uploads mapping
│       │   │   └── DataInitializer.java         # 8 mock projects seed
│       │   ├── controller/
│       │   │   └── ProjectController.java       # REST API endpoints
│       │   ├── model/
│       │   │   └── Project.java                 # JPA entity
│       │   ├── repository/
│       │   │   └── ProjectRepository.java       # Spring Data JPA
│       │   └── service/
│       │       └── ProjectService.java          # Business logic + file upload
│       └── resources/
│           ├── application.properties           # Config (env var fallbacks)
│           └── static/
│               ├── index.html                   # Homepage
│               ├── admin.html                   # Admin panel
│               ├── project.html                 # Project detail page
│               ├── login.html                   # Login page
│               ├── css/
│               │   └── style.css                # Full design system
│               └── js/
│                   ├── i18n.js                  # Bilingual engine
│                   ├── main.js                  # Homepage logic
│                   ├── project.js               # Project detail logic
│                   └── admin.js                 # Admin panel logic
├── nixpacks.toml                                # Railway build config
├── system.properties                            # Java version hint
├── pom.xml                                      # Maven dependencies
└── .gitignore
```

---

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/projects` | Public | List all projects |
| `GET` | `/api/projects/{id}` | Public | Get single project |
| `POST` | `/api/projects` | Public | Create project |
| `PUT` | `/api/projects/{id}` | Public | Update project |
| `DELETE` | `/api/projects/{id}` | Public | Delete project |
| `POST` | `/api/projects/upload` | Public | Upload image |

---

## 💻 Local Development Setup

### Prerequisites
- Java 8 JDK (`JAVA_HOME` must point to JDK, not JRE)
- MySQL 8.0 running locally
- Maven (or use the wrapper in `.m2`)

### 1. Create MySQL database
```sql
CREATE DATABASE antigravity;
```

### 2. Configure credentials
Edit `src/main/resources/application.properties` if your MySQL credentials differ from `root`/`root`.

### 3. Build and run
```bash
export JAVA_HOME="/c/Program Files/Java/jdk1.8.0_311"
/c/Users/hp/.m2/wrapper/dists/apache-maven-3.9.9-bin/.../bin/mvn spring-boot:run
```

### 4. Open in browser
```
http://localhost:8080
```

---

## 🚀 Deployment Architecture

```
GitHub (source code)
        │
        ▼
  Railway Platform
  ┌─────────────────────────────┐
  │  antigravity-backend        │  ← Spring Boot JAR
  │  (serves HTML + API)        │    built by Nixpacks (Maven)
  │  Port: auto (injected $PORT)│
  └──────────┬──────────────────┘
             │ mysql.railway.internal:3306
  ┌──────────▼──────────────────┐
  │  MySQL 8.0 Service          │  ← Database
  │  database: antigravity      │
  └─────────────────────────────┘
```

**How deployment works:**
1. Code pushed to `main` branch on GitHub
2. Railway detects the push and triggers a new build
3. Nixpacks detects `pom.xml` → runs `mvn clean package -DskipTests`
4. Railway runs `java -jar target/*.jar`
5. Spring Boot starts, connects to MySQL via private internal network
6. On first startup `DataInitializer` seeds 8 mock projects if the table is empty

---

## 🏗️ How the Project Was Built

### Phase 1 — Backend Foundation
- Created Spring Boot 2.7.18 project (Java 8 compatible — uses `javax.*` not `jakarta.*`)
- Defined `Project` JPA entity with English + Arabic fields
- Built REST CRUD API with file upload support
- Configured Spring Security: only `/admin.html` requires login, all APIs are public

### Phase 2 — Frontend UI
- Built responsive design system in `style.css` using CSS custom properties (zinc palette + orange `#fc5f2b`)
- Homepage with hero, projects grid with filter tabs, how-it-works, contact sections
- Admin panel with sidebar navigation, stat cards, data tables, and drag-drop image upload
- Project detail page with hero image, info sidebar, related projects

### Phase 3 — Arabic / Bilingual Support
- Built custom `i18n.js` engine with `localStorage` persistence and `langChanged` CustomEvent
- Added `data-i18n` attributes to all static text elements across all pages
- Added Arabic database columns (`nameAr`, `descriptionAr`, `locationAr`) to the entity
- Seeded all 8 mock projects with full Arabic translations in `DataInitializer`
- Fixed browser auto-translate conflict (Chrome was silently translating Arabic back to English) by keeping `lang="en"` always and setting `translate="no"` when in Arabic mode

### Phase 4 — Deployment
- Initialized git repo, created GitHub repository `antigravity-realestate`
- `application.properties` updated to read from environment variables with local fallbacks
- `nixpacks.toml` added to tell Railway how to build and start the app
- CORS configuration added to `SecurityConfig` to allow cross-origin requests
- Railway project created via API, MySQL service added with internal networking
- Backend deployed as single service serving both API and static frontend files

---

## 🔑 Key Decisions & Gotchas

| Issue | Solution |
|---|---|
| Spring Boot 3.x incompatible with Java 8 | Downgraded to Spring Boot 2.7.18 |
| `jakarta.*` imports fail on Java 8 | Use `javax.persistence.*` and `javax.validation.*` |
| `Map.of()` not available in Java 8 | Use `Collections.singletonMap()` |
| Delete API returning 401 | Spring Security was intercepting DELETE; made all `/api/**` routes public |
| Arabic text auto-translated by Chrome | Keep `lang="en"` always; add `translate="no"` + `<meta name="google" content="notranslate">` |
| Railway CLI won't accept personal API token | Used Railway GraphQL API directly (`backboard.railway.app/graphql/v2`) |
| Railway injects `PORT` not `SERVER_PORT` | Use `${PORT:8080}` in application.properties |
