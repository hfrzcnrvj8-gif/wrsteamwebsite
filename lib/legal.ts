// German legal documents (AGB, Widerrufsbelehrung, Datenschutzerklärung).
// Kept in German for all locales — these are the binding legal texts of the
// Wollny Reifenservice GmbH. Source: customer-supplied content (June 2026).

export type LegalBlock = string | { list: string[] };
export type LegalSection = { heading?: string; blocks: LegalBlock[] };
export type LegalDoc = {
  title: string;
  intro?: string;
  sections: LegalSection[];
};

export const agb: LegalDoc = {
  title: "Allgemeine Geschäftsbedingungen",
  intro:
    "Allgemeine Geschäftsbedingungen für alle Warenlieferungen und Dienstleistungen.",
  sections: [
    {
      heading: "A. Allgemeine Bestimmungen",
      blocks: [],
    },
    {
      heading: "1. Geltung der Allgemeinen Geschäftsbedingungen",
      blocks: [
        "Wir arbeiten ausschließlich auf Grund unserer Allgemeinen Geschäftsbedingungen. Abweichende Geschäftsbedingungen unserer Lieferanten und Abnehmer sind für uns auch dann unverbindlich, wenn wir ihnen nicht ausdrücklich widersprechen.",
        "Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
      ],
    },
    {
      heading: "2. Lieferung",
      blocks: [
        "Lieferfristen sollen schriftlich vereinbart werden. Halten wir verbindlich vereinbarte Lieferfristen nicht ein und haben wir dies zu vertreten, haften wir auf Ersatz eines vom Kunden nachgewiesenen Schadens; dies gilt nicht, wenn die Verzögerung auf höhere Gewalt zurückzuführen ist.",
        "Wird Ware auf Verlangen eines Kunden versandt, der Unternehmer ist, so geht die Gefahr auf ihn über, sobald wir die Ware dem mit der Ausführung der Versendung Beauftragten übergeben haben.",
      ],
    },
    {
      heading: "3. Preise",
      blocks: [
        "Bei Geschäften mit Verbrauchern gelten die Preise des Tages des Vertragsschlusses. Liegt zwischen Vertragsschluss und vereinbartem Liefertermin ein Zeitraum von mehr als 4 Monaten, sind wir berechtigt, Preiserhöhungen weiterzugeben, vor allem solche, die sich aus der Erhöhung unserer Einkaufspreise oder Lohnkostenerhöhungen ergeben. Übersteigt die Preiserhöhung 10% des ursprünglich vereinbarten Preises, ist unser Kunde zum Rücktritt vom Vertrag berechtigt.",
        "Bei Geschäften mit Unternehmern sind wir bei wesentlichen Kostenänderungen bis zum Tag der Lieferung berechtigt, über eine Preiserhöhung zu verhandeln, insbesondere wenn es sich um Material- und Lohnkostenerhöhungen handelt. Das Recht auf Preiserhöhung besteht nicht, wenn Lieferverzögerungen nachweislich allein in unserem Verantwortungsbereich liegen.",
      ],
    },
    {
      heading: "4. Zahlung",
      blocks: [
        "Unsere Forderungen sind sofort bei Zugang unserer Rechnung beim Kunden ohne Abzug fällig.",
        "Der Käufer kann uns ein SEPA-Basismandat/SEPA-Firmenmandat erteilen. Der Einzug der Lastschrift erfolgt 10 Tage nach Rechnungsdatum. Die Frist für die Vorabankündigung (Pre-Notifikation) wird auf 5 Tage verkürzt. Der Käufer sichert zu, für die Deckung des Kontos zu sorgen. Kosten, die auf Grund von Nichteinlösung oder Rückbuchung der Lastschrift entstehen, gehen zu Lasten des Käufers, vorausgesetzt, die Nichteinlösung oder Rückbuchung ist nicht durch uns verursacht worden.",
        "Ist Bankeinzugsverfahren vereinbart, verzichtet unser Kunde hiermit uns und seinen Banken gegenüber für die Dauer unserer Geschäftsverbindung und während der Geltung unserer Vereinbarung zum Bankeinzugsverfahren auf sein ihm gegenüber seinen Banken zustehendes Recht, Belastungen zu widerrufen. Diesen Verzicht wird unser Kunde seinen Banken mitteilen und uns hierüber auf Verlangen informieren.",
        "Der Verkäufer kann ohne Angabe von Gründen für einzelne Käufer und Verträge Vorkasse verlangen. Wir sind nicht verpflichtet, Schecks oder Wechsel entgegenzunehmen; nehmen wir sie herein, geschieht das nur erfüllungshalber.",
        "Wir sind berechtigt, bei Zahlungsverzug Zinsen in Höhe von 5% bei Geschäften mit Verbrauchern, in Höhe von 8% bei Geschäften mit Unternehmern, über dem jeweils geltenden Basiszinssatz zu verlangen. Das Geltendmachen eines höheren Verzugsschadens ist nicht ausgeschlossen. Unseren Kunden bleibt ausdrücklich der Nachweis vorbehalten, ein Schaden sei nicht entstanden oder wesentlich niedriger, als von uns geltend gemacht.",
        "Wir können Mahnkosten je Mahnung mit 7,00 EURO ansetzen.",
        "Ein Zurückbehaltungsrecht steht dem Kunden nur zu, soweit es auf demselben Vertragsverhältnis beruht.",
      ],
    },
    {
      heading: "5. Eigentumsvorbehalt",
      blocks: [
        "Wir behalten uns das Eigentum an der von uns gelieferten Ware bis zur vollständigen Bezahlung vor. Bei Geschäften mit Unternehmern gilt dieser Eigentumsvorbehalt auch, bis sämtliche, auch künftige und bedingte Forderungen aus der Geschäftsverbindung mit uns erfüllt sind. Für Geschäfte mit Unternehmern gelten folgende weitere Bestimmungen:",
        "Unser Kunde ist zur weiteren Veräußerung der Vorbehaltsware im geordneten Geschäftsgang berechtigt, jedoch nicht zur Sicherungsübereignung oder Verpfändung. Die aus der Veräußerung der Vorbehaltsware gegenüber seinem Geschäftspartner entstehenden Forderungen tritt unser Kunde uns bereits jetzt mit ab, im Weiterverarbeitungsfall einschließlich des Veredelungsanteils.",
        "Wir werden die Abtretung nicht offenlegen, es sei denn, unser Kunde ist mit einer fälligen Forderung mindestens 2 Wochen in Verzug oder er hat eine uns erteilte Berechtigung zum Bankeinzugsverfahren widerrufen. In diesen Fällen verpflichtet sich der Kunde, seinen Geschäftspartnern die uns erteilte Abtretung von sich aus anzuzeigen und uns unverzüglich seine vollständige Debitorenliste vorzulegen. Zur Feststellung der Namen und Anschriften der Geschäftspartner unseres Kunden haben wir in diesem Fall das Recht auf Einsichtnahme in seine Bücher.",
        "Übersteigt der Wert sämtlicher für uns bestehender Sicherheiten unsere Forderungen aus unseren Rechnungen nachhaltig um mehr als 10%, so werden wir auf Verlangen unseres Kunden Sicherheiten nach unserer Wahl freigeben.",
        "Erfüllt unser Kunde die vereinbarten Zahlungsbedingungen trotz Mahnung nicht, sind wir berechtigt, die von uns gelieferte Ware, montiert oder unmontiert, jederzeit wieder in Besitz zu nehmen. Unser Kunde räumt uns ausdrücklich das Recht ein, unsere Vorbehaltsware an jedem Ort zu übernehmen; wir sind auch zur Demontage berechtigt. Der jeweilige Besitzer der Ware ist vom Kunden unwiderruflich ermächtigt, die Ware an uns herauszugeben.",
        "Unser Kunde ist nur solange zum Besitz der unter Eigentumsvorbehalt verkauften Ware berechtigt, bis wir von unserem vorbehaltenen Eigentum Gebrauch machen und dadurch vom Vertrag zurücktreten. Bei Zurücknahme von Vorbehaltsware erteilen wir Gutschrift in Höhe des Tageswertes.",
      ],
    },
    {
      heading: "6. Sachmängelhaftung",
      blocks: [
        "Im Rahmen der folgenden Bedingungen haften wir für Sachmängel:",
        {
          list: [
            "auf die Dauer von 2 Jahren für neue Ware (Pkw-Reifen und Lkw-Reifen)",
            "auf die Dauer eines Jahres für runderneuerte Pkw-Reifen und runderneuerte Lkw-Reifen",
            "auf die Dauer eines Jahres für gebrauchte Ware.",
          ],
        },
        "Die Sachmängelhaftungsfristen berechnen sich jeweils ab Ablieferung (Eingang beim Kunden) der Ware an unseren Kunden.",
        "Die vorstehende Verkürzung der Verjährungsfrist gilt nicht für eine Haftung für grob fahrlässig oder vorsätzlich verursachte Schäden und nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen Pflichtverletzung des Verkäufers beruhen. Einer Pflichtverletzung des Verkäufers steht die eines gesetzlichen Vertreters oder Erfüllungsgehilfen gleich.",
        "Ein Reifen, für den Sachmängelhaftung beansprucht wird, soll uns zusammen mit dem vollständig ausgefüllten Reklamationsformular übersandt werden, um uns die Überprüfung der Beanstandung des Kunden zu ermöglichen.",
        "Bei Ablehnung des Sachmängelhaftungsanspruchs werden wir den beanstandeten Reifen auf unsere Kosten an den Kunden zurücksenden, wenn er das innerhalb von 14 Tagen nach Zugang der Ablehnung verlangt.",
        "Mängel sollen nach Möglichkeit kurzfristig gerügt werden.",
        "Bei Geschäften mit Unternehmern müssen offenkundige Mängel innerhalb von 8 Tagen nach Ablieferung (Eingang beim Kunden) schriftlich gerügt werden, nicht offenkundige Mängel innerhalb von 8 Tagen nach Feststellung des Mangels. Bei Nichteinhaltung dieser Rügefristen gilt die von uns gelieferte Ware als genehmigt. Sachmängelhaftungsansprüche sind in diesem Fall ausgeschlossen, es sei denn, es handelt sich um Schadenersatzansprüche nach § 437 Ziffer 3 BGB, sofern uns Vorsatz oder grobe Fahrlässigkeit trifft.",
        "Der Sachmängelhaftungsanspruch ist bei Geschäften mit Verbrauchern nach Wahl des Kunden auf Mangelbeseitigung oder Ersatzlieferung beschränkt. Bei Geschäften mit Unternehmern haben wir das Recht, zwischen Mangelbeseitigung oder Ersatzlieferung zu wählen.",
        "Sollten zwei Versuche der Mangelbeseitigung oder Ersatzlieferung fehlschlagen, hat unser Kunde das Recht, nach seiner Wahl Herabsetzung der Vergütung (Minderung) oder Rückgängigmachen des Vertrages (Rücktritt) zu erklären.",
        "Bei Geschäften mit Unternehmern sind wir berechtigt, bei Ersatzlieferungen eine entsprechend dem Abnutzungsgrad des reklamierten Reifens geringere Gutschrift zu erteilen oder geringere Zahlung zu leisten. Unser Kunde hat die Wahl zwischen Gutschrift und Zahlung.",
        "Sachmängelhaftungsansprüche gegen uns sind ausgeschlossen, wenn Mängel, Beeinträchtigungen oder Schäden ursächlich darauf zurückzuführen sind, dass",
        {
          list: [
            "die von uns gelieferte Ware von anderen repariert oder in sonstiger Weise bearbeitet wurde,",
            "die Fabriknummer, das Fabrikationszeichen oder sonst auf der Ware dauerhaft angebrachte Zeichen nicht mehr vorhanden oder verändert, insbesondere unkenntlich gemacht worden sind,",
            "bei Reifen der vorgeschriebene Luftdruck nachweislich nicht eingehalten wurde,",
            "Reifen einer vorschriftswidrigen Beanspruchung ausgesetzt waren, insbesondere durch Überschreiten der für die Reifengröße und Reifenart zulässigen Belastung und der zugeordneten Fahrgeschwindigkeit,",
            "Reifen nach Montage durch unrichtige Radstellung schadhaft wurden oder durch andere Störungen im Radlauf (z.B. dynamische Unwucht) in ihrer Leistung beeinträchtigt wurden,",
            "Reifen auf einer ihnen nicht zugeordneten, nicht lehrenhaltigen, rostigen oder sonst mangelhaften Felge montiert wurden,",
            "Reifen durch äußere Einwirkung oder mechanische Verletzung schadhaft geworden oder Erhitzung ausgesetzt worden sind,",
            "bei einem Radwechsel die Radmuttern oder Schrauben nicht nach 20 bis max. 50 km Fahrstrecke nachgezogen wurden, vorausgesetzt, wir haben unseren Kunden bei Lieferung auf diese Notwendigkeit hingewiesen,",
            "Reifen vor der Montage vom Kunden oder von ihm beauftragten Dritten im Freien gelagert wurden,",
            "natürlicher Verschleiß oder Beschädigungen der Ware vorliegen, die auf unsachgemäße Behandlung oder Unfall zurückzuführen sind,",
            "Reifen bei Tube-Type-Ausführungen mit gebrauchten Schläuchen/Wulstbändern, bei Tubeless-Ausführungen ohne Ventilauswechslung (Pkw-Reifen) oder ohne neuen Dichtungsring (Lkw-/Schulterreifen) durch den Kunden oder Dritte montiert wurden.",
          ],
        },
        "Bei berechtigter Sachmängelrüge tragen wir sämtliche im Zusammenhang mit der Gewährleistungsabwicklung entstehenden Aufwendungen.",
        "Streitigkeiten über Sachmängelhaftungsansprüche und Reklamationsabwicklungen sollen durch die unabhängige Schiedsstelle des Bundesverbandes Reifenhandel und Vulkaniseurhandwerk e.V., Bonn, beigelegt werden, wenn unser Kunde oder wenn wir im Einvernehmen mit dem Kunden diese unverzüglich nach Kenntnis des Streitfalls schriftlich anrufen. Durch die Anrufung der Schiedsstelle wird der Rechtsweg nicht ausgeschlossen. Auf die Dauer des Schiedsverfahrens ist die Verjährung etwaiger Ansprüche gehemmt. Die Schiedsstelle wird nicht tätig, wenn bereits der Rechtsweg beschritten ist; sie stellt ihre Tätigkeit ein, wenn dies während des Schiedsverfahrens geschieht. Das Verfahren der Schiedsstelle richtet sich nach deren Geschäftsordnung, die den Parteien auf Verlangen von der Schiedsstelle ausgehändigt wird. Das Schiedsverfahren ist für beide Parteien kostenlos.",
      ],
    },
    {
      heading: "7. Haftung",
      blocks: [
        "Wir haften auf Schadenersatz, wenn uns oder unsere Erfüllungsgehilfen Vorsatz oder grobe Fahrlässigkeit trifft. Ferner haften wir, wenn Eigenschaften zugesichert oder Garantien gegeben wurden oder wenn der Schaden durch unseren Verzug oder durch von uns zu vertretendes Unmöglichwerden der Leistung entstanden ist.",
        "Wir haften außerdem bei Verletzung grundlegend vertragswesentlicher Pflichten.",
        "Die Haftung ist in den vorgenannten Fällen begrenzt auf den bei Vertragsabschluss vorhersehbaren typischen Schaden. Dies gilt nicht, soweit es sich um Geschäfte mit Verbrauchern handelt.",
        "Im Übrigen sind Schadenersatzansprüche gegen uns ausgeschlossen.",
        "Haftungsbegrenzung oder Haftungsausschluss gelten nicht bei körperlichen Schäden.",
        "Haftungsbegrenzung und -ausschluss gelten ferner nicht, falls und soweit wir nach den Bestimmungen des Produkthaftungsgesetzes haften.",
      ],
    },
    {
      heading: "8. Allgemeine Regelungen",
      blocks: [
        "Bei Geschäften mit Unternehmern ist Erfüllungsort und ausschließlicher Gerichtsstand unser Firmensitz.",
        "Telefonische oder mündliche Absprachen sollen unverzüglich schriftlich bestätigt werden.",
        "Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen unwirksam sein oder werden, berührt das die Rechtswirksamkeit der übrigen Bestimmungen nicht.",
      ],
    },
    {
      heading: "B. Besondere Bestimmungen für Fahrzeugreparaturen",
      blocks: [
        "Für Fahrzeugreparaturen, außer solchen an Reifen und Rädern, gelten ergänzend und zusätzlich zu den unter A aufgeführten Klauseln die nachstehenden Bedingungen.",
      ],
    },
    {
      heading: "1. Kostenvoranschlag",
      blocks: [
        "Auf Verlangen unserer Kunden erstellen wir einen Kostenvoranschlag, der die voraussichtlichen Reparaturkosten einschließlich Angabe der Mehrwertsteuer enthält. Abweichungen bis zu 10% von diesem Kostenvoranschlag sind zulässig, vorausgesetzt, dies ist dem Kunden zumutbar.",
        "Für den Kostenvoranschlag berechnete und vereinnahmte Kosten werden bei Auftragsdurchführung mit der Auftragssumme verrechnet.",
      ],
    },
    {
      heading: "2. Fertigstellungstermine",
      blocks: [
        "Überschreiten wir schuldhaft verbindlich vereinbarte Fertigstellungstermine, haften wir gegenüber unserem Kunden auf Schadenersatz für von diesem nachgewiesene und auf der Verzögerung ursächlich beruhende Schäden.",
        "Zur Stellung eines Ersatzfahrzeugs sind wir nicht verpflichtet. Nimmt der Kunde auf Grund von uns zu vertretender Terminüberschreitung ein Ersatzfahrzeug in Anspruch, erstatten wir die hierfür entstehenden Kosten unter Berücksichtigung einer etwaigen Ersparnis für den Kunden durch Nichtbeanspruchung des eigenen Fahrzeugs.",
        "Ersatzansprüche sind ausgeschlossen, wenn wir nachweisen, dass die Terminüberschreitung auf höherer Gewalt beruht.",
      ],
    },
    {
      heading: "3. Unternehmerpfandrecht",
      blocks: [
        "Neben dem gesetzlichen Unternehmerpfandrecht steht uns wegen unserer Forderung aus dem Auftrag ein vertragliches Pfandrecht an den auf Grund des Auftrages in unseren Besitz gelangten Gegenständen zu.",
        "Das vertragliche Pfandrecht kann auch wegen Forderungen aus früher durchgeführten Arbeiten und allen sonstigen Leistungen geltend gemacht werden, soweit diese mit dem Auftragsgegenstand in Zusammenhang stehen. Für sonstige Ansprüche aus der Geschäftsverbindung gilt das vertragliche Pfandrecht nur, soweit diese unbestritten oder rechtskräftig festgestellt sind.",
      ],
    },
    {
      heading: "4. Abnahme",
      blocks: [
        "Unser Kunde ist zur Abnahme des Auftragsgegenstandes verpflichtet, sobald wir ihn über die Fertigstellung informieren. Die Abnahme soll erfolgen in unserem Betrieb, soweit nicht ausdrücklich etwas anderes vereinbart ist.",
        "Unser Kunde kommt mit der Annahme in Verzug, wenn er den Vertragsgegenstand entweder nicht zum vereinbarten Übergabedatum oder nicht auf Aufforderung durch uns unverzüglich abholt.",
        "Im Fall des Verzuges des Kunden mit der Abnahme haften wir nur bei Vorsatz und grober Fahrlässigkeit.",
      ],
    },
    {
      heading: "5. Sachmängelhaftung (Reparaturen)",
      blocks: [
        "Wir haften bei Sachmängeln auf Dauer eines Jahres ab Ablieferung des Vertragsgegenstandes an unseren Kunden. Die Regelungen unter A 6 gelten entsprechend.",
        "Die vorstehende Verkürzung der Verjährungsfrist gilt nicht für eine Haftung für grob fahrlässig oder vorsätzlich verursachte Schäden und nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen Pflichtverletzung des Verkäufers beruhen. Einer Pflichtverletzung des Verkäufers steht die eines gesetzlichen Vertreters oder Erfüllungsgehilfen gleich.",
        "Schlagen zwei Versuche der Mangelbeseitigung oder der Ersatzlieferung fehl, ist der Kunde entsprechend der Bestimmung unter A Ziffer 6 berechtigt, zu mindern oder vom Vertrag zurückzutreten.",
      ],
    },
    {
      heading: "6. Eigentumsvorbehalt (Reparaturen)",
      blocks: [
        "Die unter A Ziffer 5 geregelten Eigentumsvorbehaltsrechte beziehen sich ausschließlich auf Teile, die nicht wesentliche Bestandteile des Fahrzeugs werden.",
        "Ausgebaute oder ausgetauschte Teile gehen in unser Eigentum über.",
      ],
    },
  ],
};

export const widerruf: LegalDoc = {
  title: "Widerrufsrecht",
  intro: "Widerrufsbelehrung und Muster-Widerrufsformular.",
  sections: [
    {
      heading: "Widerrufsrecht für Verbraucher",
      blocks: [
        "Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag,",
        {
          list: [
            "an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben,",
            "im Falle mehrerer Waren, die Sie im Rahmen einer einheitlichen Bestellung bestellt haben und die getrennt geliefert werden: ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die letzte Ware in Besitz genommen haben,",
            "im Falle einer Lieferung in mehreren Teilsendungen oder Stücken: ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die letzte Teilsendung oder das letzte Stück in Besitz genommen haben,",
            "bei Dienstleistungen: ab dem Tag des Vertragsabschlusses.",
          ],
        },
        "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Wollny Reifenservice GmbH, Borsigring 38, 31319 Sehnde, Telefon: 05138/4520, E-Mail: Post@Reifenberatung.com) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.",
        "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
      ],
    },
    {
      heading: "Folgen des Widerrufs",
      blocks: [
        "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben – mit Ausnahme der Lieferkosten sowie der Kosten für die Rücksendung – unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.",
        "Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart. In keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
        "Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben – je nachdem, welches der frühere Zeitpunkt ist.",
        "Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.",
      ],
    },
    {
      heading: "Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts",
      blocks: [
        "Ein Widerrufsrecht besteht nicht bei Verträgen",
        {
          list: [
            "zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind,",
            "zur Lieferung von Waren, die nach der Lieferung aufgrund ihrer Beschaffenheit untrennbar mit anderen Gütern vermischt wurden,",
            "zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde,",
            "zur Lieferung von Reifen, Felgen oder Kompletträdern, die ausdrücklich für den Kunden bestellt und/oder bereits individuell montiert wurden. Diese gelten als Sonderanfertigungen und sind vom Widerrufsrecht ausgeschlossen.",
          ],
        },
        "Das Widerrufsrecht erlischt vorzeitig bei Dienstleistungen, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung erst begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen und Sie gleichzeitig bestätigt haben, dass Sie Ihr Widerrufsrecht mit vollständiger Vertragserfüllung verlieren.",
      ],
    },
    {
      heading: "Kein Widerrufsrecht für Unternehmer",
      blocks: [
        "Das Widerrufsrecht gilt ausschließlich für Verbraucher im Sinne des § 13 BGB. Bestellen Unternehmer im Rahmen ihrer gewerblichen oder selbständigen beruflichen Tätigkeit (§ 14 BGB), besteht kein Widerrufsrecht.",
      ],
    },
    {
      heading: "Muster-Widerrufsformular",
      blocks: [
        "(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)",
        "An: Wollny Reifenservice GmbH, Borsigring 38, 31319 Sehnde, Telefon: 05138/4520, E-Mail: Post@Reifenberatung.com",
        "Hiermit widerrufe(n) ich/wir (Vorname, Name & Adresse) den von mir/uns (Vorname, Name und Adresse) abgeschlossenen Vertrag über den Kauf der folgenden Waren / die Erbringung der folgenden Dienstleistung:",
        {
          list: [
            "Bestellt am / erhalten am:",
            "Vorname/Name des/der Verbraucher(s):",
            "Anschrift des/der Verbraucher(s):",
            "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):",
            "Datum:",
          ],
        },
        "(*) Unzutreffendes streichen.",
      ],
    },
  ],
};

export const datenschutz: LegalDoc = {
  title: "Datenschutzerklärung",
  intro:
    "Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.",
  sections: [
    {
      heading: "Verantwortlicher",
      blocks: [
        "Verantwortlicher für die Datenverarbeitung ist: Wollny, Zuckerfabriksweg 11, 31319 Sehnde, E-Mail: Info@Reifenberatung.com.",
      ],
    },
    {
      heading: "1. Hosting und Server-Logfiles",
      blocks: [
        "Sie können unsere Website besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf speichert der Webserver automatisch ein sogenanntes Server-Logfile, das z.B. Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, den Namen der angeforderten Datei, die übertragene Datenmenge sowie Browser- und Betriebssystem-Informationen enthält. Diese Daten dienen ausschließlich dem störungsfreien und sicheren Betrieb der Website und werden auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet und nur kurzzeitig gespeichert.",
        "Unsere Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet, die als Auftragsverarbeiter für uns tätig ist. Eine etwaige Übermittlung in die USA stützt sich auf Standardvertragsklauseln der EU-Kommission bzw. das EU-US Data Privacy Framework.",
      ],
    },
    {
      heading: "2. Kontaktformular und E-Mail",
      blocks: [
        "Wenn Sie unser Kontaktformular nutzen oder uns per E-Mail schreiben, verarbeiten wir die von Ihnen angegebenen Daten — Name und E-Mail-Adresse, optional Telefonnummer, Fahrzeug und Firma sowie Ihre Nachricht — um Ihre Anfrage zu bearbeiten und einen Termin abzustimmen. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b und lit. f DSGVO. Pflichtfelder sind als solche gekennzeichnet.",
        "Für den technischen Versand des Formulars als E-Mail setzen wir den Dienstleister Resend (Resend, Inc., USA) als Auftragsverarbeiter ein; eine Übermittlung in die USA stützt sich auf Standardvertragsklauseln bzw. das EU-US Data Privacy Framework. Ihre Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.",
      ],
    },
    {
      heading: "3. Karten und externe Links",
      blocks: [
        "Wir binden keine Karten- oder Drittanbieterdienste direkt in unsere Website ein. Die Schaltfläche „Route planen“ ist lediglich ein Link zu Google Maps. Erst wenn Sie diesen Link anklicken, verlassen Sie unsere Website und es gelten die Datenschutzbestimmungen von Google. Auf die dortige Verarbeitung haben wir keinen Einfluss.",
      ],
    },
    {
      heading: "4. Cookies und lokale Speicherung",
      blocks: [
        "Beim ersten Besuch unserer Website erscheint ein Hinweis-Banner, in dem Sie der Verwendung von Analyse-Cookies zustimmen oder diese ablehnen können. Ihre Wahl wird im lokalen Speicher Ihres Browsers gespeichert und gilt für alle weiteren Besuche. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den lokalen Speicher Ihres Browsers leeren (Einstellungen → Datenschutz → Browserdaten löschen).",
        "Wenn Sie Analyse-Cookies ablehnen oder noch keine Auswahl getroffen haben, werden keine Analyse- oder Marketing-Cookies gesetzt.",
        "Für eine technisch notwendige Funktion (Ihre gewählte helle oder dunkle Darstellung) speichern wir einen Wert im lokalen Speicher Ihres Browsers. Diese Speicherung ist für den von Ihnen gewünschten Dienst erforderlich und bedarf keiner Einwilligung. Sie können sie jederzeit über die Einstellungen Ihres Browsers zurücksetzen.",
      ],
    },
    {
      heading: "5. Ihre Rechte",
      blocks: [
        "Als Betroffener haben Sie folgende Rechte:",
        {
          list: [
            "gemäß Art. 15 DSGVO das Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten,",
            "gemäß Art. 16 DSGVO das Recht auf Berichtigung unrichtiger oder Vervollständigung Ihrer Daten,",
            "gemäß Art. 17 DSGVO das Recht auf Löschung Ihrer bei uns gespeicherten Daten,",
            "gemäß Art. 18 DSGVO das Recht auf Einschränkung der Verarbeitung,",
            "gemäß Art. 20 DSGVO das Recht auf Datenübertragbarkeit,",
            "gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren.",
          ],
        },
        "Widerspruchsrecht: Soweit wir personenbezogene Daten zur Wahrung unserer berechtigten Interessen verarbeiten, können Sie dieser Verarbeitung mit Wirkung für die Zukunft widersprechen. Erfolgt die Verarbeitung zu Zwecken des Direktmarketings, können Sie dieses Recht jederzeit ausüben.",
        "Kontakt: Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten sowie zu Auskunft, Berichtigung, Einschränkung oder Löschung von Daten und zum Widerruf erteilter Einwilligungen wenden Sie sich bitte an: Rafael Wollny, Zuckerfabriksweg 11, 31319 Sehnde, Tel. 015233861128, Info@Reifenberatung.com.",
      ],
    },
  ],
};
