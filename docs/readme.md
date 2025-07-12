# NextJs: v15-temnplate-2.1

## Acerca de
1. nextjs version 15 y canary
2. taiwind 4 (hubo unos problemas ya que copie los css de la version 3 y no son  compatibles). Sobre la marcha los voy corrigiendo. 
    - Ejm: hubo error en config.css, agregué al inicio del archivom el import de tailwind
    - TODO: tuve que sacr las variantes de md: lg: en un @variant por error en el deploy. Probar si era la falta del import.
3. ocurrencia en react-hook-form: error en tipados y en componenente switch
    - tuve que instalar una version anterior: "react-hook-form": "7.57",
4. en el caso de prisma:
    - esta configurado para manejar muktiples archivos de schema. 
    - multi-schema NO funcionó, habria que hacer mas pasos (TODO)   
    - no se puede tener acceso a modelos de otro archivo. por tanto no serviria de mucho, ah no ser que cada proyectomaneje su propia auth para menejar su propio user, company.
    - por ahora sirve para agrupar tablas de proyectos distintos en una misma bd. Por ejemplo tener en un solo proyecto next tablas para LecturaMedidor, ControlGastos, etc 
    - en todo caso, tablas que no esten amarradas a tablas del schema base se pueden organizar en un *.schema. 
        - agregar un prefijo, por ejemplo: MedidorCategoryModel y hacerle un @@map("medidor_category)


## Pasos para clonar template
1. clonar proyecto a nuevo directorio de proyecto
    - actualizar package.json: name del proyecto
    - actuaizar app.constants.ts: 
        - APP_NAME 
        - NAV_BAR_ITEMS
        - CONFIG_MODULES
    - actualizar module.enum.ts
2. eliminar .git
3. instalar dependencias: bun install
4. configurar git local de acuerdo a nuevo proyecto creado en github
5. hacer el primer commit
6. hacer el push
7. actualizar .env a partir de example.env
    7.1 crear proyecto en supabase. 
        - anotar DATABASE_URL
    7.2 crear proyecto en google cloud. 
        - anotar AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET
8. Actuaizar .env
9. Crear proyecto en vercel y asociar repositorio github
    - agregar las variables de entorno
    - hacer el deploy
10. Actualizar proyecto google cloud con la url de redirecciom (agregar la url del proyecto deployado)
11. Agregar el store procedure del insertSupereadmin en supabase desde el proyecto en local.
12. Probar url 

## ocurrencias
1. si por algún motivo no se puede hacer el prisma migrate por un tema de bloqueo de la bd, una solucion es en supabase hacer un reset en Project-Settings/Restart-project. El bloqueo me pasó porque estaba haciendo una migración y deje esperando el ingreso del nombre, se canceló y luego mostraba error de bloqueo (databse server was reached but timed out)
