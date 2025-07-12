# Install NextJs v15, tailwind 4

## Create project
```bash
bunx create-next-app@latest
``` 

### Se instalaron: 
- "react": "^19.0.0",
- "react-dom": "^19.0.0",
- "next": "15.3.4"
- "@tailwindcss/postcss": "^4",
- "tailwindcss": "^4", 

## Instalar shadcn
```basch
bunx --bun shadcn@latest init
```

## Refactor
- copy /tsconfig.json
- copy /styles
- copy /src/app/ : icon, layout, loading
- copy /constant
- copy /components/common
- copy /app/api/
- copy /auth.ts
- copy /nextauth.d.ts
- copy /utils
- delete /libs
- copy prisma/schema.prisma
- copy /.env
- copy /example.env
- actualizar variables de entorno de la bd
- ```bash
    bun prisma migrate dev
    bun prisma generate
    ```

OJO:
MOver interfaces no dominios, ni ui a common
mover interfce de list-table a su componente

## Install packages
```bash
bun add react-spinners
bun add next-themes
bunx --bun shadcn@latest add avatar
bunx --bun shadcn@latest add menubar
bun add zustand
bun add bcryptjs
bun add prisma tsx --save-dev
bun @prisma/extension-accelerate @prisma/client
bunx prisma init
bun add next@canary

## Removes created temporary files
```bash
find . -name "*Zone.Identifier" -type f -delete
```




