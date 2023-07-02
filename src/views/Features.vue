<template>
    <div class="text-start">
      Funktionen für den Betreiber:
      <div class="container overflow-hidden text-start">
      <div class="row gy-5">
        <div class="col-6">
          <div class="p-3 border bg-light">Änderbar</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Logo</li>
            <li class="list-group-item">Themen</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Anpassbar</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Nutzungsbedingungen</li>
            <li class="list-group-item">Verhaltenskodex</li>
            <li class="list-group-item">Datenschutzerklärung</li>
            <li class="list-group-item">FAQ</li>
            <li class="list-group-item">Spenden</li>
            <li class="list-group-item">Impressum</li>
            <li class="list-group-item">Support</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">E-Mail-Funktionen</div>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Registrierung</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Abstellbare Registrierung</li>
            <li class="list-group-item">Zutritt nur durch Einladung</li>
            <li class="list-group-item">Registrierung nur per Einladungscode</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Inhalt-Filter</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Themen-Filter</li>
            <li class="list-group-item">Nutzern, denen ich folge</li>
            <li class="list-group-item">Meine Gruppen</li>
            <li class="list-group-item">Neuste</li>
            <li class="list-group-item">Älteste</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Beitragsfunktionen</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Erstellen</li>
            <li class="list-group-item">Bearbeiten</li>
            <li class="list-group-item">Anheften</li>
            <li class="list-group-item">Melden</li>
            <li class="list-group-item">Sperren</li>
            <li class="list-group-item">Kommentieren</li>
            <li class="list-group-item">Empfehlen</li>
            <li class="list-group-item">Vorschaubild verpixeln</li>
            <li class="list-group-item">Beitrag Editor</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Beitrag Editor</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Fett</li>
            <li class="list-group-item">Kursiv</li>
            <li class="list-group-item">Unterstrichen</li>
            <li class="list-group-item">Absatz</li>
            <li class="list-group-item">Verlinkung</li>
            <li class="list-group-item">Überschriften</li>
            <li class="list-group-item">Listen</li>
            <li class="list-group-item">Zitate</li>
            <li class="list-group-item">Linie</li>
            <li class="list-group-item">Hashtags</li>
            <li class="list-group-item">User erwähnen</li>
            <li class="list-group-item">Drittanbieter-Einbetten (Codepen, DTube, Facebook, Flickr, GIPHY, Instagram, Meetup, MixCloud, Reddit, SlideShare, SoundCloud, Twitch, Twitter, Vimeo, YouTube)</li>
            <li class="list-group-item">Listen</li>
            <li class="list-group-item">Listen</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">User-Account</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Bild</li>
            <li class="list-group-item">Name</li>
            <li class="list-group-item">Nutzername</li>
            <li class="list-group-item">Stadt/Region</li>
            <li class="list-group-item">Bio</li>
            <li class="list-group-item">Social Media Links</li>
            <li class="list-group-item">User hat kommentiert</li>
            <li class="list-group-item">User hat empfohlen</li>
            <li class="list-group-item">User melden</li>
            <li class="list-group-item">Name</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Einstellungen</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Stumm geschaltete Nutzer</li>
            <li class="list-group-item">Blockierte Nutzer</li>
            <li class="list-group-item">Drittanbieter-Einstellungen</li>
            <li class="list-group-item">E-Mail-Benachrichtigung</li>
            <li class="list-group-item">Datenbackup</li>
            <li class="list-group-item">Private Einstellungen</li>
            <li class="list-group-item">Passwort</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Gruppen</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Offene Gruppen (sichtbar)</li>
            <li class="list-group-item">Geschlossene Gruppen (sichtbar)</li>
            <li class="list-group-item">Geheime Gruppen (nicht sichtbar)</li>
            <li class="list-group-item">Gruppenmitgliederverwaltung</li>
            <li class="list-group-item">Rollenvergabe</li>
            <li class="list-group-item">Beitrag erstellen (Mitglieder)</li>
            <li class="list-group-item">Beitrag anheften (Gruppeninhaber) *</li>
            <li class="list-group-item">Gruppe melden</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Suche</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Textsuche</li>
            <li class="list-group-item">Hashtagsuche</li>
            <li class="list-group-item">Mitgliedersuche</li>
            <li class="list-group-item">Gruppensuche</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Sprachen</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Deutsch</li>
            <li class="list-group-item">Englisch</li>
            <li class="list-group-item">Spanisch</li>
            <li class="list-group-item">Französisch</li>
            <li class="list-group-item">Italienisch</li>
            <li class="list-group-item">Niederländisch</li>
            <li class="list-group-item">Polnisch</li>
            <li class="list-group-item">Portugiesisch</li>
            <li class="list-group-item">Russisch</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Landkarte</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Meine Position</li>
            <li class="list-group-item">Mitgliederpositionen</li>
            <li class="list-group-item">Gruppenposition</li>
         
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Moderation</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Beitrag sperren</li>
            <li class="list-group-item">Kommentar sperren</li>
            <li class="list-group-item">Nutzer sperren</li>
            <li class="list-group-item">Gruppe sperren</li>
    
         
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Systemverwaltung</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Nutzerstatistiken</li>
            <li class="list-group-item">Beitragsstatistiken</li>
            <li class="list-group-item">Kommentarstatistiken</li>
            <li class="list-group-item">Benachrichtigungsstatistiken</li>
            <li class="list-group-item">Einladungsstatistiken</li>
            <li class="list-group-item">Followerstatistiken</li>
            <li class="list-group-item">Empfehlungsstatistiken</li>
            <li class="list-group-item">Nutzer verwalten</li>
            <li class="list-group-item">Themen verwalten</li>
            <li class="list-group-item">Hashtags verwalten</li>
            <li class="list-group-item">Nutzer einladen</li>
            <li class="list-group-item">Spendeninfo anzeigen</li>
          </ol>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Chat *</div>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">Privatnachrichten</li>
            <li class="list-group-item">Gruppenchat zwischen mehreren Usern</li>
            <li class="list-group-item">Gruppenchat für angelegte Gruppen</li>
      
          </ol>
        </div>
      </div>
    </div>
 
 
    <div class="my-6">
      Das ist eine umfassende Auflistung des Funktionsumfangs für das gemietete soziale Netzwerk. 
      Bitte beachte, dass dies nur eine Zusammenfassung ist und weitere Details und spezifische 
      Funktionen hinzugefügt werden können, je nach den Anforderungen und Anpassungen, 
      die du für dein Netzwerk vornehmen möchtest.
    </div>
  <hr />


<div class="mt-6">
    <h1>Zusätzliche Funktionen und Möglichkeiten</h1>
    
    <h2>Monetarisierung der Mitgliedschaften:</h2>
    <ul>
      <li>Sie haben die Möglichkeit, Ihren Nutzern kostenpflichtige Mitgliedschaften anzubieten.</li>
      <li>Sie können verschiedene Mitgliedschaftsstufen mit unterschiedlichen Vorteilen und Preisen festlegen.</li>
      <li>Nutzer, die eine kostenpflichtige Mitgliedschaft erwerben, erhalten Zugang zu exklusiven Funktionen oder Inhalten in Ihrem Netzwerk.</li>
    </ul>
    
    <h2>Verkauf von Werbeplätzen:</h2>
    <ul>
      <li>Sie können Werbeflächen auf Ihrer gemieteten Netzwerkseite an Unternehmen oder andere Organisationen verkaufen.</li>
      <li>Durch den Verkauf von Werbung können Sie zusätzliche Einnahmen generieren und gleichzeitig Ihr Netzwerk weiterentwickeln.</li>
    </ul>
    
    <h2>Spendenseite für den Betreiber:</h2>
    <ul>
      <li>Wir bieten Ihnen die Möglichkeit, eine Spendenseite in Ihrem gemieteten Netzwerk einzurichten.</li>
      <li>Sie können Ihre Nutzer ermutigen, Spenden für die Unterstützung und den Ausbau Ihres Netzwerks zu tätigen.</li>
      <li>Die Spendenseite kann über verschiedene Zahlungsmethoden verfügen, um Nutzern eine bequeme und sichere Spendenabwicklung zu ermöglichen.</li>
    </ul>
    
    <p>Wir verstehen, dass jeder Betreiber unterschiedliche Anforderungen hat. Deshalb bieten wir Ihnen die Flexibilität, diese zusätzlichen Funktionen an Ihre Bedürfnisse anzupassen. Unser Team unterstützt Sie gerne bei der Einrichtung und Integration dieser Funktionen in Ihre gemietete Netzwerkinstanz.</p>
    
    <p>Bitte beachten Sie, dass die Monetarisierung der Mitgliedschaften und der Verkauf von Werbeplätzen von Ihnen aktiv umgesetzt werden müssen. Unser Support-Team steht Ihnen jedoch zur Verfügung, um Sie bei Fragen oder Schwierigkeiten zu unterstützen.</p>
    
    <p>Wir hoffen, dass diese zusätzlichen Möglichkeiten Ihnen helfen, das Potenzial Ihres gemieteten Sozialen Netzwerks voll auszuschöpfen. Bei weiteren Fragen stehen wir Ihnen gerne zur Verfügung.</p>
  </div>

  <hr class="my-6"/>

  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
</template>
<script>
export default {
    name: 'About',
}
</script>