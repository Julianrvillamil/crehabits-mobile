# CreHabits Mobile

Este es un proyecto móvil desarrollado con [Next.js](https://nextjs.org/) y Capacitor para ejecutarse como una aplicación híbrida en dispositivos Android.

## 🚀 **Cómo ejecutar el proyecto**

### 🔧 **Modo Desarrollo (Web)**

Para ejecutar el proyecto en modo desarrollo en el navegador:

```bash
npm install  # Instalar dependencias
npm run dev  # Iniciar el servidor local

```

Abre [http://localhost:3000](http://localhost:3000/) en tu navegador para ver la aplicación.

---

### 📱 **Ejecutar en Dispositivo o Emulador (Android)**

Este proyecto usa **Capacitor** para ejecutar la aplicación en Android.

### **1️⃣ Agregar la Plataforma Android**

Si aún no se ha agregado Android al proyecto, corre:

```bash
npx cap add android

```

### **2️⃣ Construir y Copiar los Archivos Web**

Antes de ejecutar en un dispositivo, debes compilar el proyecto:

```bash
npm run build  # Genera los archivos optimizados para producción
npx cap copy   # Copia los archivos web a la plataforma nativa (Android)

```

### **3️⃣ Abrir en Android Studio**

Para abrir el proyecto en Android Studio y ejecutarlo en un emulador o dispositivo:

```bash
npx cap open android

```

Desde Android Studio puedes:

- Ejecutarlo en un **Emulador**.
- Conectar un **Dispositivo Android** y ejecutarlo ahí.

---

### 📦 **Generar el APK**

Para obtener el APK instalable:

```bash
cd android  # Ir a la carpeta de Android
./gradlew assembleDebug  # Generar el APK en modo debug

```

El APK generado estará en:

```
android/app/build/outputs/apk/debug/app-debug.apk

```

Si deseas un APK para producción:

```bash
./gradlew assembleRelease

```

APK de release estará en:

```
android/app/build/outputs/apk/release/app-release.apk

```

---

### 📲 **Instalar el APK en un Dispositivo Android**

Si deseas probar la aplicación en un teléfono sin usar Android Studio, conecta tu dispositivo y ejecuta:

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk

```

Si **no tienes ADB**, simplemente copia el archivo APK a tu dispositivo y ábrelo desde un explorador de archivos.

---

## 📖 **Más Información**

Para aprender más sobre las tecnologías usadas en este proyecto:

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Capacitor](https://capacitorjs.com/docs)
- [Documentación de Android Studio](https://developer.android.com/studio)
