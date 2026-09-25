## 📁 Angular 22 Project Structure

```text
products-app/
│
├── src/
│   ├── app/
│   │   │
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   │
│   │   │   ├── interceptors/
│   │   │   │   └── auth.interceptor.ts
│   │   │   │
│   │   │   └── services/
│   │   │       ├── auth.service.ts
│   │   │       └── storage.service.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.ts
│   │   │   │   │   └── header.html
│   │   │   │   │
│   │   │   │   └── button/
│   │   │   │       ├── button.ts
│   │   │   │       └── button.html
│   │   │   │
│   │   │   └── models/
│   │   │       ├── user.model.ts
│   │   │       └── login.model.ts
│   │   │
│   │   ├── layouts/
│   │   │   ├── auth-layout/
│   │   │   │   ├── auth-layout.ts
│   │   │   │   └── auth-layout.html
│   │   │   │
│   │   │   └── main-layout/
│   │   │       ├── main-layout.ts
│   │   │       └── main-layout.html
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.ts
│   │   │   │   │   ├── login.html
│   │   │   │   │   └── login.css
│   │   │   │   │
│   │   │   │   └── register/
│   │   │   │       ├── register.ts
│   │   │   │       └── register.html
│   │   │   │
│   │   │   ├── home/
│   │   │   │   ├── home.ts
│   │   │   │   └── home.html
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── products.ts
│   │   │   │   └── products.html
│   │   │   │
│   │   │   └── profile/
│   │   │       ├── profile.ts
│   │   │       └── profile.html
│   │   │
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   │   └── app.ts
│   │
│   ├── assets/
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.development.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

### 📂 Folder Responsibilities

| Folder          | Purpose                                                            |
| --------------- | ------------------------------------------------------------------ |
| `core/`         | Application-wide services, guards, and interceptors                |
| `shared/`       | Reusable components and TypeScript models                          |
| `layouts/`      | Common layouts such as authentication and main application layouts |
| `pages/`        | Feature/page-level components                                      |
| `auth/`         | Login and registration functionality                               |
| `services/`     | API communication and storage-related services                     |
| `guards/`       | Route protection and authentication checks                         |
| `interceptors/` | HTTP request/response handling                                     |
| `models/`       | TypeScript interfaces and data models                              |
| `environments/` | Environment-specific configuration                                 |
| `assets/`       | Static assets such as images and icons                             |

### 🏗️ Architecture

The project follows a **feature-oriented Angular architecture** with clear separation between:

* **Core** — application-wide functionality
* **Shared** — reusable UI components and models
* **Layouts** — common page layouts
* **Pages** — application features
* **Services** — API and application logic
* **Guards** — route protection
* **Interceptors** — HTTP request handling
* **Models** — strongly typed application data
