# Condiciones (AGB)

Si reservas una sesión conmigo, estas son las reglas:

---

## 1. Reserva y pago
- Solo con cita previa.
- Pido un 50 % de señal para guardar la fecha.
- El resto se paga al terminar la sesión.

---

## 2. Cancelación y cambio de fecha
- Cancelar con menos de 48 horas → puede aplicarse un 20 % de cargo.
- Cambiar fecha hasta 48 horas antes, si tengo otro hueco libre.

---

## 3. Fotos y uso
- El copyright es mío.
- Tú recibes el uso que acordemos por escrito (privado, comercial, etc.).
- No edites ni revendas los archivos sin mi permiso.

---

## 4. Responsabilidad
No respondo de retrasos por causas ajenas — mal tiempo, fallos de equipo, problemas del local, etc.

---

## ¿Preguntas?
**Correo**: <span id="email">Javascript Blocked</span>

**Teléfono**: <span id="phone">Javascript Blocked</span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("phone").innerHTML = data.phone;    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
