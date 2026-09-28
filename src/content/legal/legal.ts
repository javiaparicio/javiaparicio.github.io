export type Locale = 'de' | 'en' | 'es';

export type LocalizedHtml = Record<Locale, string>;

/**
 * Impressum / legal notice body HTML.
 *
 * Tokens (replace at render from contact data):
 * business_name, legal_form, owner, address, email, phone, che, mwst, contact
 * (double-brace placeholders).
 */
export const legalCopy: LocalizedHtml = {
  de: `<h1>Rechtliche Informationen</h1>

<h2>Anbieterkennzeichnung</h2>

<p><strong>Firma</strong>: {{business_name}}</p>
<p><strong>Rechtsform</strong>: {{legal_form}}</p>
<p><strong>Inhaber</strong>: {{owner}}</p>
<p><strong>Adresse</strong>: {{address}}</p>
<p><strong>E-Mail</strong>: {{email}}</p>
<p><strong>Telefon</strong>: {{phone}}</p>
<p><strong>UID / Handelsregister-Nr.</strong>: {{che}}</p>
<p><strong>Mehrwertsteuer</strong>: {{mwst}}</p>

<hr>

<h2>Verantwortlich für den Inhalt dieser Website</h2>

<p>{{owner}}, {{address}}</p>

<hr>

<h2>Urheberrecht</h2>

<p>Texte, Fotografien und sonstige Inhalte dieser Website sind urheberrechtlich geschützt und Eigentum von {{business_name}}, sofern nicht anders gekennzeichnet. Jede Vervielfältigung, Bearbeitung oder Verbreitung ohne vorherige schriftliche Zustimmung ist untersagt.</p>

<hr>

<h2>Externe Links</h2>

<p>Diese Website kann Links zu Websites Dritter enthalten. Für deren Inhalte übernehmen wir keine Verantwortung; beim Aufruf solcher Links gelten die Bedingungen der jeweiligen Anbieter.</p>

<hr>

<h2>Kontakt</h2>

<p>Bei Fragen zu diesen Angaben: {{email}} · {{phone}}</p>

<noscript>
  <p class="contact-noscript">E-Mail und Telefon werden mit JavaScript angezeigt. Nutzen Sie das <a href="{{contact}}">Kontaktformular</a>.</p>
</noscript>`,

  en: `<h1>Legal Notice</h1>

<h2>Provider Information</h2>

<p><strong>Business name</strong>: {{business_name}}</p>
<p><strong>Legal form</strong>: {{legal_form}}</p>
<p><strong>Owner</strong>: {{owner}}</p>
<p><strong>Address</strong>: {{address}}</p>
<p><strong>Email</strong>: {{email}}</p>
<p><strong>Phone</strong>: {{phone}}</p>
<p><strong>UID / Commercial register no.</strong>: {{che}}</p>
<p><strong>VAT</strong>: {{mwst}}</p>

<hr>

<h2>Person Responsible for Website Content</h2>

<p>{{owner}}, {{address}}</p>

<hr>

<h2>Copyright</h2>

<p>Text, photographs and other content on this website are protected by copyright and owned by {{business_name}} unless otherwise stated. Reproduction, editing or distribution without prior written consent is prohibited.</p>

<hr>

<h2>External Links</h2>

<p>This website may contain links to third-party sites. We are not responsible for their content; the respective providers’ terms apply when you visit them.</p>

<hr>

<h2>Contact</h2>

<p>Questions about this page: {{email}} · {{phone}}</p>

<noscript>
  <p class="contact-noscript">Email and phone are shown with JavaScript. Please use the <a href="{{contact}}">contact form</a>.</p>
</noscript>`,

  es: `<h1>Aviso legal</h1>

<p><em>El prestador tiene su sede en Suiza. Esta página identifica al proveedor según la práctica suiza; no sustituye obligaciones de la legislación española para prestadores radicados en España.</em></p>

<h2>Datos del prestador</h2>

<p><strong>Nombre comercial</strong>: {{business_name}}</p>
<p><strong>Forma jurídica</strong>: {{legal_form}}</p>
<p><strong>Titular</strong>: {{owner}}</p>
<p><strong>Dirección</strong>: {{address}}</p>
<p><strong>Correo electrónico</strong>: {{email}}</p>
<p><strong>Teléfono</strong>: {{phone}}</p>
<p><strong>UID / N.º registro mercantil</strong>: {{che}}</p>
<p><strong>IVA</strong>: {{mwst}}</p>

<hr>

<h2>Responsable del contenido de este sitio web</h2>

<p>{{owner}}, {{address}}</p>

<hr>

<h2>Derechos de autor</h2>

<p>Los textos, fotografías y demás contenidos de este sitio están protegidos por derechos de autor y son propiedad de {{business_name}}, salvo indicación contraria. Queda prohibida su reproducción, modificación o distribución sin consentimiento previo por escrito.</p>

<hr>

<h2>Enlaces externos</h2>

<p>Este sitio puede incluir enlaces a páginas de terceros. No nos responsabilizamos de su contenido; al acceder a ellos rigen las condiciones del proveedor correspondiente.</p>

<hr>

<h2>Contacto</h2>

<p>Consultas sobre esta página: {{email}} · {{phone}}</p>

<noscript>
  <p class="contact-noscript">El correo y el teléfono requieren JavaScript. Use el <a href="{{contact}}">formulario de contacto</a>.</p>
</noscript>`,
};
