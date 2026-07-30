MIND & SOUL THERAPY WEBSITE - VERSION 1
=======================================

This is a complete static multi-page website prepared for Cloudflare Pages.

DEPLOY TO CLOUDFLARE PAGES
1. Unzip the folder.
2. In Cloudflare, open Workers & Pages.
3. Create a Pages project and choose "Direct Upload".
4. Upload the contents of this folder, or drag and drop the ZIP if Cloudflare accepts it.
5. Connect the custom domain mindandsoul-therapy.co.uk and www.mindandsoul-therapy.co.uk.

IMPORTANT
- All navigation uses actual .html files, and _redirects also supports clean URLs. This avoids the Contact-page 404 issue experienced on the other website.
- The contact form submits the visitor's enquiry directly from the website and sends it to amalia.counselling@gmail.com. It does not open the visitor's email application.
- The About section currently uses an elegant AA monogram. Replace this later with Amalia's preferred professional portrait.
- Verify fees, opening hours, cancellation terms and professional membership details before the final public launch.

FILES
- index.html: Home
- about.html: About Amalia
- services.html: Therapy services
- how-it-works.html: Therapy process
- fees.html: Fees
- faq.html: Frequently asked questions
- contact.html: Contact and enquiry form
- romana.html: Romanian-language overview
- privacy.html and terms.html: basic legal pages
- _headers: security headers for Cloudflare
- _redirects: clean URL support and custom 404 handling
- robots.txt and sitemap.xml: search engine files

CONTACT FORM SETUP
------------------
The contact form sends submissions through FormSubmit to amalia.counselling@gmail.com.
After the first test submission, FormSubmit will send an activation email to that address. Open that email and confirm the form once. After confirmation, future website enquiries will arrive directly by email.
