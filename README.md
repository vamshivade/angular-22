# Recommended Angular 22 project structure

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