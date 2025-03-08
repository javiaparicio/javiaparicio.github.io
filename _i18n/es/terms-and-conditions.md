# Términos y Condiciones (T&C)

Al reservar una sesión de fotografía con Javi Aparicio Foto, usted acepta los siguientes términos:

---

## **1. Reserva y Pago**
- Todas las sesiones son solo con cita previa.
- Se requiere un depósito del 50 % para confirmar su sesión.
- El saldo restante se abona al finalizar la sesión.

---

## **2. Cancelación y Reprogramación**
- Las cancelaciones realizadas con menos de 48 horas de antelación pueden incurrir en una tarifa del 20 %.
- La reprogramación está permitida hasta 48 horas antes de la sesión, sujeto a disponibilidad.

---

## **3. Propiedad y Derechos de Uso de las Imágenes**
- Todas las fotografías son propiedad de Javi Aparicio Foto.
- Se otorga a los clientes una licencia para uso personal o comercial, según lo acordado.
- Las fotografías no pueden ser alteradas o revendidas sin consentimiento previo por escrito.

---

## **4. Responsabilidad**
Javi Aparicio Foto no es responsable de retrasos o fallos causados por circunstancias fuera de nuestro control (por ejemplo, clima, problemas técnicos).

---

## Información de Contacto
Para cualquier consulta sobre estos términos, contáctenos:

**Correo Electrónico**: <span id="email">Javascript Blocked</span>

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
