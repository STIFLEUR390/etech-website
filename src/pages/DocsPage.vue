<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  BookOpen,
  Key,
  Send,
  MessageSquare,
  Webhook,
  AlertTriangle,
  Gauge,
  ChevronRight,
} from 'lucide-vue-next'
import CodeSnippet from '@/components/ui/CodeSnippet.vue'

const { t } = useI18n()

const activeSection = ref('intro')

const sections = [
  { id: 'intro', label: 'Introduction', icon: BookOpen },
  { id: 'auth', label: 'Authentification', icon: Key },
  { id: 'sms-api', label: 'Envoi SMS', icon: Send },
  { id: 'whatsapp-api', label: 'Envoi WhatsApp', icon: MessageSquare },
  { id: 'webhooks', label: 'Webhooks & DLR', icon: Webhook },
  { id: 'errors', label: 'Codes d\'erreur', icon: AlertTriangle },
  { id: 'rate-limit', label: 'Rate Limiting', icon: Gauge },
]

const languages = ['cURL', 'JavaScript', 'Python', 'PHP']

const smsExamples: Record<string, string> = {
  cURL: `curl -X GET "https://sms.etech-keys.com/ss/envoyer.php?login=VOTRE_LOGIN&password=VOTRE_MDP&sender=ETECH+KEYS&tel=237695686207&text=Bonjour+!"`,
  JavaScript: `const response = await fetch(
  "https://sms.etech-keys.com/ss/envoyer.php?" + new URLSearchParams({
    login: "VOTRE_LOGIN",
    password: "VOTRE_MDP",
    sender: "ETECH KEYS",
    tel: "237695686207",
    text: "Bonjour depuis ETECH KEYS!"
  })
);
const data = await response.text();
console.log(data);`,
  Python: `import requests

response = requests.get(
    "https://sms.etech-keys.com/ss/envoyer.php",
    params={
        "login": "VOTRE_LOGIN",
        "password": "VOTRE_MDP",
        "sender": "ETECH KEYS",
        "tel": "237695686207",
        "text": "Bonjour depuis ETECH KEYS!"
    }
)
print(response.text)`,
  PHP: `<?php
$url = "https://sms.etech-keys.com/ss/envoyer.php";
$params = [
    'login' => 'VOTRE_LOGIN',
    'password' => 'VOTRE_MDP',
    'sender' => 'ETECH KEYS',
    'tel' => '237695686207',
    'msg' => 'Bonjour depuis ETECH KEYS!'
];
$response = file_get_contents(
    $url . '?' . http_build_query($params)
);
echo $response;`,
}

const whatsappExamples: Record<string, string> = {
  cURL: `curl -X POST "https://v1.api.etech-keys.com/api/v1/whatsapp/send" \\
  -H "Authorization: Bearer VOTRE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "237695686207",
    "type": "template",
    "template": {
      "name": "mon_template",
      "language": "fr",
      "components": [{
        "type": "body",
        "parameters": [{
          "type": "text",
          "text": "Jean Dupont"
        }]
      }]
    }
  }'`,
  JavaScript: `const response = await fetch(
  "https://v1.api.etech-keys.com/api/v1/whatsapp/send",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer VOTRE_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: "237695686207",
      type: "template",
      template: {
        name: "mon_template",
        language: "fr",
        components: [{
          type: "body",
          parameters: [{ type: "text", text: "Jean Dupont" }]
        }]
      }
    })
  }
);
const data = await response.json();
console.log(data);`,
  Python: `import requests

response = requests.post(
    "https://v1.api.etech-keys.com/api/v1/whatsapp/send",
    headers={
        "Authorization": "Bearer VOTRE_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "to": "237695686207",
        "type": "template",
        "template": {
            "name": "mon_template",
            "language": "fr",
            "components": [{
                "type": "body",
                "parameters": [{"type": "text", "text": "Jean Dupont"}]
            }]
        }
    }
)
print(response.json())`,
  PHP: `<?php
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => 'https://v1.api.etech-keys.com/api/v1/whatsapp/send',
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $token,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'to' => '237695686207',
        'type' => 'template',
        'template' => [
            'name' => 'mon_template',
            'language' => 'fr',
            'components' => [[
                'type' => 'body',
                'parameters' => [[
                    'type' => 'text',
                    'text' => 'Jean Dupont',
                ]],
            ]],
        ],
    ]),
    CURLOPT_RETURNTRANSFER => true,
]);
$result = curl_exec($ch);`,
}

const webhookExample = `// Webhook DLR SMS — Réception du callback
.tel = $_GET['tel'] ?? '';
.etat = $_GET['etat'] ?? '';
.id = $_GET['id'] ?? '';

if ($etat === '1') {
    // SMS livré avec succès
    log_delivery($id, $tel, 'delivered');
} elseif ($etat === '2') {
    // Échec de livraison
    log_delivery($id, $tel, 'failed');
}

http_response_code(200);
echo 'OK';`

const errorCodes = [
  { code: '100', desc: 'Paramètre manquant' },
  { code: '101', desc: 'Login ou mot de passe incorrect' },
  { code: '102', desc: 'Solde insuffisant' },
  { code: '103', desc: 'Numéro de destinataire invalide' },
  { code: '104', desc: 'Message vide' },
  { code: '105', desc: 'Sender name non autorisé' },
  { code: '200', desc: 'SMS envoyé avec succès' },
  { code: '201', desc: 'Erreur interne serveur' },
]

const selectedLang = ref('cURL')
const selectedWALang = ref('cURL')
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-light dark:bg-brand-blue-primary/10 border border-brand-blue-primary/20 mb-6">
          <BookOpen :size="16" class="text-brand-blue-primary" />
          <span class="text-sm font-semibold text-brand-blue-primary">Documentation développeurs</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white">
          {{ t('docs.title') }}
        </h1>
        <p class="mt-4 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          {{ t('docs.subtitle') }}
        </p>

        <!-- Supported languages -->
        <div class="flex flex-wrap gap-2 mt-6">
          <span v-for="lang in languages" :key="lang" class="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 text-brand-slate dark:text-gray-400">
            {{ lang }}
          </span>
        </div>
      </div>
    </section>

    <!-- ===== DOCS LAYOUT ===== -->
    <section class="pb-20">
      <div class="container-custom">
        <div class="grid lg:grid-cols-[240px_1fr] gap-12">
          <!-- Sidebar -->
          <aside class="lg:sticky lg:top-24 lg:self-start">
            <nav class="space-y-1">
              <button
                v-for="section in sections"
                :key="section.id"
                @click="activeSection = section.id"
                class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                :class="activeSection === section.id
                  ? 'bg-brand-blue-primary text-white shadow-brand'
                  : 'text-brand-slate dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-brand-dark dark:hover:text-white'"
              >
                <component :is="section.icon" :size="16" />
                {{ section.label }}
                <ChevronRight v-if="activeSection === section.id" :size="14" class="ml-auto" />
              </button>
            </nav>
          </aside>

          <!-- Content -->
          <div class="min-w-0">
            <!-- Introduction -->
            <div v-if="activeSection === 'intro'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Introduction à l'API ETECH KEYS</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed mb-4">
                  L'API ETECH KEYS vous permet d'envoyer des SMS et des messages WhatsApp Business à vos clients depuis vos applications.
                  Nous proposons une API HTTPS REST simple et un protocole SMPP pour les volumes importants.
                </p>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed">
                  Pour commencer, créez un compte sur <a href="https://etech-keys.com" class="text-brand-blue-primary hover:underline" target="_blank">etech-keys.com</a> et récupérez vos identifiants API.
                </p>
              </div>

              <div class="p-6 rounded-2xl bg-brand-blue-light/50 dark:bg-brand-blue-primary/10 border border-brand-blue-primary/20">
                <h3 class="font-bold text-brand-dark dark:text-white mb-2">Base URL</h3>
                <code class="text-sm font-mono text-brand-blue-primary">https://sms.etech-keys.com</code>
                <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">API REST v1: <code class="font-mono">https://v1.api.etech-keys.com</code></p>
              </div>
            </div>

            <!-- Auth -->
            <div v-else-if="activeSection === 'auth'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Authentification</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed mb-4">
                  L'API SMS utilise une authentification par login/mot de passe en paramètres de requête.
                  L'API REST v1 utilise un Bearer Token.
                </p>
              </div>

              <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
                <h3 class="font-bold text-brand-dark dark:text-white mb-3">Paramètres d'authentification</h3>
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-white/10">
                      <th class="text-left py-2 text-brand-slate dark:text-gray-400">Paramètre</th>
                      <th class="text-left py-2 text-brand-slate dark:text-gray-400">Description</th>
                      <th class="text-center py-2 text-brand-slate dark:text-gray-400">Requis</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100 dark:divide-white/5">
                    <tr>
                      <td class="py-2 font-mono text-brand-blue-primary">login</td>
                      <td class="py-2 text-brand-dark dark:text-gray-300">Votre identifiant</td>
                      <td class="py-2 text-center text-brand-green">✓</td>
                    </tr>
                    <tr>
                      <td class="py-2 font-mono text-brand-blue-primary">password</td>
                      <td class="py-2 text-brand-dark dark:text-gray-300">Votre mot de passe</td>
                      <td class="py-2 text-center text-brand-green">✓</td>
                    </tr>
                    <tr>
                      <td class="py-2 font-mono text-brand-blue-primary">sender</td>
                      <td class="py-2 text-brand-dark dark:text-gray-300">Nom d'expéditeur (max 11 car.)</td>
                      <td class="py-2 text-center text-brand-green">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SMS API -->
            <div v-else-if="activeSection === 'sms-api'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Envoi SMS</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed">
                  Envoyez des SMS via une requête HTTP GET ou POST. Exemples dans plusieurs langages.
                </p>
              </div>

              <!-- Language selector -->
              <div class="flex gap-2">
                <button
                  v-for="lang in languages"
                  :key="lang"
                  @click="selectedLang = lang"
                  class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="selectedLang === lang
                    ? 'bg-brand-blue-primary text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-brand-slate dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'"
                >
                  {{ lang }}
                </button>
              </div>

              <CodeSnippet :code="smsExamples[selectedLang] ?? ''" :language="selectedLang" title="Envoi SMS" />
            </div>

            <!-- WhatsApp API -->
            <div v-else-if="activeSection === 'whatsapp-api'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Envoi WhatsApp</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed">
                  Envoyez des messages WhatsApp Business via l'API REST avec Bearer Token.
                </p>
              </div>

              <div class="flex gap-2">
                <button
                  v-for="lang in languages"
                  :key="lang"
                  @click="selectedWALang = lang"
                  class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="selectedWALang === lang
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-brand-slate dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'"
                >
                  {{ lang }}
                </button>
              </div>

              <CodeSnippet :code="whatsappExamples[selectedWALang] ?? ''" :language="selectedWALang" title="Envoi WhatsApp Business" />
            </div>

            <!-- Webhooks -->
            <div v-else-if="activeSection === 'webhooks'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Webhooks & DLR</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed mb-4">
                  Recevez des callbacks HTTP sur votre URL dès qu'un SMS est livré ou échoue.
                  Pour WhatsApp, les webhooks incluent les messages entrants et les statuts de livraison.
                </p>
              </div>

              <CodeSnippet :code="webhookExample" language="PHP" title="Webhook DLR SMS" />
            </div>

            <!-- Error Codes -->
            <div v-else-if="activeSection === 'errors'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Codes d'erreur</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed">
                  Liste des codes de réponse de l'API SMS.
                </p>
              </div>

              <div class="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="bg-gray-50 dark:bg-white/5">
                      <th class="text-left px-6 py-3 font-semibold text-brand-dark dark:text-white">Code</th>
                      <th class="text-left px-6 py-3 font-semibold text-brand-dark dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-white/10">
                    <tr v-for="err in errorCodes" :key="err.code" class="hover:bg-gray-50 dark:hover:bg-white/5">
                      <td class="px-6 py-3 font-mono text-brand-blue-primary font-bold">{{ err.code }}</td>
                      <td class="px-6 py-3 text-brand-slate dark:text-gray-300">{{ err.desc }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Rate Limiting -->
            <div v-else-if="activeSection === 'rate-limit'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-brand-dark dark:text-white mb-4">Rate Limiting</h2>
                <p class="text-brand-slate dark:text-gray-300 leading-relaxed">
                  L'API applique des limites de débit pour garantir la stabilité du service.
                </p>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
                  <h3 class="font-bold text-brand-dark dark:text-white mb-2">API HTTPS</h3>
                  <p class="text-3xl font-extrabold text-brand-blue-primary">10 SMS/s</p>
                  <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">par connexion</p>
                </div>
                <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
                  <h3 class="font-bold text-brand-dark dark:text-white mb-2">SMPP</h3>
                  <p class="text-3xl font-extrabold text-brand-green">500 SMS/s</p>
                  <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">par abonnement</p>
                </div>
              </div>

              <p class="text-sm text-brand-slate dark:text-gray-400">
                Si vous dépassez la limite, l'API retourne un code d'erreur 429. Réessayez après quelques secondes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
