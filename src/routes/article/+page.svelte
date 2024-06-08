<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import ArrowUp from 'carbon-icons-svelte/lib/ArrowUp.svelte';
	import Question from '$lib/components/Question.svelte';
	import { List, Paragraph } from '$lib';

	let showScrollButton = false;

	function scrollToTop() {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	onMount(() => {
		window.onscroll = () => {
			if (window.scrollY > 30) {
				showScrollButton = true;
			} else {
				showScrollButton = false;
			}
		};
	});
</script>

<h1>Das Leben als queere Person in der EU</h1>
<h2>
	Fühlst du dich sicher in deinem Land? Hast du Angst davor gesehen zu werden? Diese Fragen stellen sich viele tausende
	queere Menschen in verschiedenen Ländern in der EU täglich. Viele dieser Personen haben weiterhin Angst ihre
	Sexualität in der Öffentlichkeit zu zeigen, aufgrund der Angst, diskriminiert zu werden.
</h2>
<enhanced:img
	src="../../assets/images/Foto_1.jpg"
	sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px)1080px, 1280px"
	class="pic"
/>
<Paragraph>
	Um genauer auf die Situationen in den verschiedenen Ländern zu schauen, haben wir uns drei verschiedene Länder
	innerhalb der EU rausgesucht, welche die Frage, wie sich das Leben der queeren Personen in den verschiedenen EU
	Ländern äußert, beantwortet. Gezielt haben wir drei verschiedene Länder gewählt, welche sowohl positive Beispiele für
	das Leben innerhalb der EU als LGTBQ Mitglied darstellen, als auch negative Beispiele.
</Paragraph>
<h3>Die Lage in den Niederlanden</h3>
<List>
	<li>Am 21.Dezember 2000 führte die Niederlande als erstes Land der Welt die gleichgeschlechtliche Ehe ein.</li>
	<li>
		Gesetz für ehe nicht geändert oder separat, sondern angepasst das es alle inkludiert Das Gesetz wurde in späteren
		Jahre so angepasst, dass es alle Menschen inkludiert, egal welches Geschlecht oder Orientierung sie zugehörig sind.
	</li>
	<li>1. April 2001 trat das gesetz in Kraft</li>
	<li>
		2016 gab es in den Niederlanden eine Umfrage und 10,3 Prozent der Frauen gaben an Mitglied der LGTBQ zu sein,
		hingegen waren es nur 2,5 Prozent der Männer welche Angaben Teil der der LGTBQ zu sein
	</li>
	<li>
		Seit dem Mittelalter ist homosexualität verboten und wurde strafrechtlich verboten (ganz Europa), Homosexualität
		wurde damals mit dem Tode bestraft.
	</li>
	<li>
		Damals gab es geheime Orte, welche für Treffen der Homosexuellen genutzt wurden, damit sie einen gemeinsamen
		Treffpunkt hatten aber nicht auffallen -&gt; sie berührten sich am Ellbogen um sich ein Zeichen der Zuneigung zu
		geben
	</li>
	<li>Nederlandse Vereniging voor Integratie van Homoseksualiteit älteste bestehende LGTBQ Vereinigung der Welt</li>
	<li>
		1993 wurde ein Gesetz gegen Diskriminierung erlassen: verbietet Ausgrenzung von Homosexuellen auf Wohn und
		Arbeitsmarkt. Ausnahme religiöse Schulen: Lehrkräfte
	</li>
	<li>Adoption für gleichgeschlechtliche Paare 2001 in den Niederlanden erlaubt.</li>
	<li>Hohe Akzeptanz für gleichgeschlechtliche Ehe in den Niederlande 82 prozent</li>
</List>
<enhanced:img
	src="../../assets/images/Foto_2.jpg"
	sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px)1080px, 1280px"
	class="pic"
/>
<h4>
	Um die Lage in den Niederlanden genauer zu verdeutlichen, haben wir mit einem Mann in den Niederlanden gesprochen,
	welcher Teil der LGTBQ Gemeinschaft ist. Dabei haben wir dem 24 Jährigen Liam drei Fragen gestellt, um die Situation
	zu verdeutlichen.
</h4>
<Paragraph>
	<Question>Wie fühlst du dich in Holland als homosexueller Mann?</Question>
	Ich fühle mich aufgehoben und sicher. Viele meiner Freunde, welche ebenfalls LGTBQ Mitglieder sind, fühlen sich ebenfalls
	sehr sicher in den Niederlanden. Ich lebe schon mein ganzes Leben in den Niederlanden und durfte schon von klein auf erfahren,
	wie offen die Menschen hier gegenüber homosexuellen Menschen sind. Die meisten schlechten Erfahrungen habe ich tatsächlich
	im Urlaub in anderen Ländern gemacht, meine Freunde ebenfalls, natürlich gibt es hier und da ein paar Leute, die dem ganzen
	noch nicht so positiv gegenüberstehen, aber das passiert wirklich selten. Mittlerweile gibt es auch viele kleinere Communitys,
	welche echt gut bei den Leuten ankommen, das gibt es nicht in jedem Land. Die Niederlande ist ebenfalls eine der ältesten
	Vereinigungen für homosexuelle Menschen der Welt.
</Paragraph>
<Paragraph>
	<Question>Gibt es noch Dinge, die nach deiner Meinung verbessert werden müssten?</Question>
	Die meisten Probleme gibt es noch bei der Akzeptanz von allen LGTBQ Mitgliedern, dies betrifft aber eigentlich nur wenige
	Bereiche. Selbst der Gesetzesentwurf der Ehe wurde für alle Personen jeglicher Sexualität ermöglicht. Ich hoffe dennoch,
	dass es weitere Gesetze gibt, welche es den Menschen ermöglichen, ihre Sexualität ungestraft ausleben zu können. Tatsächlich
	ist die Niederlande aber auch ein Vorreiter in diesen Punkten, weshalb es vermutlich nichts gegenüber den anderen Ländern
	auszusetzen gibt. Es sollte generell auf der Welt mehr getan werden, damit die Menschen freier und sicherer Leben können.
</Paragraph>
<Paragraph>
	<Question>Wie schaust du in die Zukunft?</Question>
	Ich bin zwiegespalten. Ich denke für LGTBQ Mitglieder wird immer mehr Platz geschaffen und die Menschen werden immer offener.
	Trotzdem ist die Veränderung ziemlich langsam. In den Niederlanden sind fast 83 Prozent für eine gleichgeschlechtliche
	Ehe gewesen, ein starkes Zeichen für mehr Toleranz, dennoch wurde die rechtspopulistische Partei PVV Stimmensieger. Ein
	Widerspruch, welcher sich nicht nur durch die Niederlande, sondern durch viele europäische Länder zieht. Ich habe Angst,
	dass der Fortschritt zurückgeht und man selbst vielleicht nur in der eigenen Blase lebt. Trotzdem bin ich weiterhin positiv
	gestimmt, dass viele Länder ähnlich der Niederlande handeln und den Weg für LGTBQ freundliches Leben ermöglichen.
	<br />
	<span class="author">(von Milan Volkers)</span>
</Paragraph>
<enhanced:img
	src="../../assets/images/Foto_5.jpg"
	sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px)1080px, 1280px"
	class="pic"
/>
<h3>Die Lage in Deutschland</h3>
<List>
	<li>
		Bis 1969 stand männliche Homosexualität in der Bundesrepublik Deutschland unter Strafe. Ursprung dieser Gesetzgebung
		war das Reichsstrafgesetzbuch von 1872. In dem Paragraph 175 stand:
		<q>
			Widernatürliche Unzucht, welche zwischen Personen männlichen Geschlechts oder von Menschen mit Thieren begangen
			wird, ist mit Gefängniß zu bestrafen; auch kann auf Verlust der bürgerlichenEhrenrechte erkannt werden.
		</q>
	</li>
	<li>
		In den 1920ern soll <q>einfache Homosexualität</q> entkriminalisiert werden, dazu kommt es dann aber nicht aufgrund des
		aufkommenden Nationalsozialismus
	</li>
	<li>
		Paragraph 175 wird 1935 verschärft, sodass ein bloßer Verdacht für 10 Jahre Gefängnis reicht. Tausende Männer werden
		auch in Konzentrationslagern ermordet.
	</li>
	<li>Zwischen 1950 und 1965 gab es circa 45.000 Verurteilungen in der Bundesrepublik</li>
	<li>
		1969 wurde das Strafgesetzbuch zu ersten Mal geändert: Homosexualität unter erwachsenen Männern über 21 ist nun
		nicht mehr strafbar
	</li>
	<li>Erst 1994 wurde der Paragraph 175 endgültig gestrichen.</li>
	<li>Seit 2001 sind eingetragene Lebenspartnerschaften möglich</li>
	<li>
		2016 geben zwei Drittel der 16-30 Jährigen an, in der Schule noch nie Beispiele oder Materialien bekommen zu haben
		in denen LGBTQI+-Personen vorkommen.
	</li>
	<li>2017 ist die Ehe für alle eigeführt worden</li>
	<li>
		Diskrimierung findet auch im Gesetzbuch statt nicht nur in der Freizeit und Arbeit. Einige Gesetzte sind noch nicht
		angepasst auf Personen die sich nicht als Frau oder Mann identifizieren
	</li>
	<li>
		Es sind noch Fragen zum Abstammungsrecht offen, z.B. können Co-Mütter ihr Kind erst nach 8 Wochen adoptieren (dabei
		werden sie mit unnötiger Bürokratie und Diskrimierungen konfrontiert). Das heißt wenn die Gebärende Mutter in diesem
		Zeitraum nicht für das Kind sorgen kann, liegt die Obhut beim Jugendamt und die Co-Mutter hat keinerlei Rechte
	</li>
	<li>
		Übergriffe auf LGBTQ+ Personen nehmen zu (was daran liegen könnte, dass mehr gemeldet wird) EU Studie für
		Deutschland *1
	</li>
</List>
<List>
	<li>45 % der nicht hetero Paare vermeiden Händchen-halten in der Öffentlichkeit</li>
	<li>24 % vermeiden bestimmte Orte aus Angst</li>
	<li>23% wurden schon auf der Arbeit diskriminiert</li>
	<li>36% der Befragten wurden im vergangenem Jahr diskriminiert</li>
</List>
<h4>Es wird in 3 Formen der Homophobie unterteilt:</h4>
<List>
	<li>klassisch verwerflich Krankheit keine Rechte, wird deutlich weniger nur noch 7% in DE</li>
	<li>
		modern sprechen sich für gleiche Rechte aus, aber möchten keine Berührungspunkte mit LGBTQ+Personen haben, 44% sind
		der Meinung: sie sollten nicht so ein Wirbel um ihre Orientierung machen
	</li>
	<li>
		affektive auf die persönliche Einstellung bezogen, 2016 ist es noch 40% der Befragten unangenehm wenn im nähre
		Umfeld eine Person nicht hetero ist
	</li>
</List>
<h4>Diskriminierungen finden auf den verschiedensten Ebenen statt:</h4>
<Paragraph>
	Viele Mitglieder der LGBTQ+ Community erleben verbale Anfeindungen oder Online-Mobbing. Doch es bleibt nicht immer bei
	den verbalen Attacken, oft kommt es zu gewaltsamen Angriffen aufgrund der sexuellen Orientierung. Selbst bei
	medizinischen Vorgehen sind nicht alle Gleichberechtigt, Homosexuelle Männer dürfen nur Blutspenden wenn sie
	nachweisen können, dass sie über mehrere Monate in einer monoga- men Beziehung sind oder mehrere Monate keinen
	Geschlechtsverkehr hatten. Auch wenn sich in Deutschland viel getan hat und vor allem die Jugend inklusiver wird, muss
	noch einiges in der Gesellschaft und der Gesetzeslage passieren.
</Paragraph>
<enhanced:img
	src="../../assets/images/Foto_4.jpg"
	sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px)1080px, 1280px"
	class="pic"
/>
<h4>Ein Bericht von Marie aus Deutschland:</h4>
<Paragraph
	>Ein Bericht von Marie aus Deutschland: Marie (weiblich) 26, wohnt mit zwei Mitbewohner:innen in einer WG in Mainz,
	vor zwei Jahren hat sie ihr Studium beendet und arbeitet nun für ein kleines Unternehmen. Vor einem Jahr hat sie bei
	einer WG-Feier ihre Freundin kennengelernt, es ist ihre erste feste Beziehung und könnte eigentlich nicht glücklicher
	sein. Ihren Freundinnen erzählt sie sofort, dass sie jemanden kennen gelernt hat, aber Zuhause bei ihren Eltern kann
	sie es nicht erzählen, sie möchte sich nicht streiten und auch die Beleidigungen nicht hören die sie um die Ohren
	geknallt bekommen würde. So bleiben Marie mit ihrer Freundin in der Öffentlichkeit vorsichtig und zeigen sich nicht
	offensichtlich als Paar.. Im Sommer haben die beiden einen Urlaub gebucht, beim einchecken geht der Mitarbeiter vom
	Hotel davon aus dass sie Schwestern sind, Marie entscheidet sich dazu ihn nicht zu korrigieren. Sie ist froh darüber,
	dass sie in Deutschland nicht um ihre Sicherheit fürchten muss (jedenfalls was das Gesetz angeht). In ihrem engen
	Umfeld fühlt sie sich wohl und wird von ihren Freundinnen bestärkt. Wenn es in der Öffentlichkeit vielleicht noch mehr
	Vorbilder LGBTQ+ Personen wären und mehr Aufklärung stattfinden würde, würden vielleicht noch mehr auch ältere
	Personen ihre alten Eistellungen nochmal überdenken.
	<span class="author">(von Natalie Tillmann)</span>
</Paragraph>
<h3>Die Lage in Ungarn</h3>
<Paragraph>
	Seit 2002 war Homosexualität mit Hetrosexualität gleichgestellt. Homosexuelle Männer durften sogar in der Armee
	dienen. Doch seit der Machtübernahme durch den Ministerpräsidenten Viktor Orban hat sich die Lage für alle
	Mitglieder*innen der LGBTQ+ Community sehr verschlechtert.
</Paragraph>
<List>
	<li>2012 wurde festgelegt, dass die Ehe nur zwischen Mann und Frau geschlossen werden kann.</li>
	<li>Genderstudien wurden 2018 verboten.</li>
	<li>
		Seit 2020 kann keine Person ihr Geschlecht in offiziellen Dokumenten ändern. Die Spalte <q>Geschlecht</q> in
		Ausweisdokumenten wurde geändert zu <q>bei der Geburt zugewiesenes Geschlecht</q>.
	</li>
	<li>
		Ebenfalls 2020 wurde die Definition von <q>Eltern</q> im Grundgesetz als Mann und Frau verankert. Unverheiratete Paare
		dürfen keine Kinder adoptieren.
	</li>
	<li>Die Darstellung von Homosexualität in Werbung, Büchern auf Bildern oder in Fernsehserien ist verboten</li>
</List>
<enhanced:img
	src="../../assets/images/Foto_3.jpg"
	sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px)1080px, 1280px"
	class="pic"
/>
<h4>Trotzdem steigt die Zustimmung zur Gleichgeschlechtlichen Ehe in der Gesellschaft:</h4>
<List>
	<li>2006 befürworteten 18% der Bevölkerung die Gleichstellung in der Ehe.</li>
	<li>2015 waren es 39%</li>
	<li>2023 waren es 44%.</li>
	<li>51% der Bevölkerung lehnt die Gleichstellung allerdings weiterhin ab.</li>
</List>
<List>
	<li>Ebenfalls 51% der Bevölkerung würde sich unwohl fühlen, wenn ihr Kind in einer homosexuellen Beziehung wäre</li>
	<li>
		47% sprechen sich dafür aus, dass Homosexualität und Tras*identität nicht in der Schule thematisiert werden sollten.
	</li>
</List>
<p>
	Doch viele Organisationen setzen sich in Ungarn für die Rechter der LGBTQ+ Community ein. Die Gruppe
	<q>For a Diverse Hungary</q> besteht zum Beispiel aus Abgeordneten aller Oppositionsparteien. Sie kämpefn für
	Menschenrechte allgemein, aber auch für LGBTQ+ Rechte. Es gibt auch viele Unabhängige Organisationen, die Sich für die
	Rechte der LGBTQ+ Community einsetzt wie zum Besispiel <q>Budapest Pride</q>, <q>Labrisz</q> oder
	<q>Transvanilla</q>.
</p>
<h4>
	Wir haben ein Mitglied der LGBTQ+ Community in Ungarn einige Fragen gestellt, um die Situation im Alltag zu
	verdeutlichen.
</h4>
<Paragraph>
	<Question>Wie fühlst du dich in Ungarn als Teil der LGBTQ+ Community?</Question>
	Es ist schwer ich selbst zu sein. Ich kann meine Sexualität nicht öffentlich zeigen. Die einzige Stadt, in der man manchmal
	gleichgeschlechtliche Pärchen in der Öffentlichkeit sieht ist Budapest. Allerdings ist auch das sehr selten. Ich finde
	die Menschen sehr mutig, denn allein im letzten Jahr nahmen die queerfeindlichen Hassverbrechen wieder zu. Die Täter*innen
	fühlen sich durch die Regierung und die queerfeindlcihen Gesetze bestärkt. Jedes Jahr findet in Budapest der Christopher
	Streets Day statt. Doch man muss damit rechnen, dass es gewaltsame Gegenproteste gibt. Diese gab es in den letzten Jahren
	immer. Trotzdem gingen 2023 ca.3500 Demonstrierende auf die Straße. Am Tag davor wurde eine Geldstrafe von über 30000€
	gegen eine Buchhandlung ausgesprochen. Sie verkauften das Buch <q>Heartstopper</q> ohne Schutzfolie. Das ist ein Comic
	über zwei Jugendliche die in einer homosexuellen Beziehung sind. Es steht sogar in der Jugendbuchabteilung.
</Paragraph>
<Paragraph>
	<Question>Wie schaust du in die Zukunft?</Question>
	Ich bin unsicher, was die Zukunft in unserem Land mit sich bringt. Ich habe Hoffnung weil vor allem junge Menschen offener
	geworden sind. Allerdings glaube ich nicht, dass die Regierung uns bald entgegenkommt. Wir müssten eine ganz neue Regierung
	haben, damit sich wirklich etwas verändert. Das ist sehr frustrierend. Ich kenne einige Menschen die wegen der queerfeindlichen
	Regierung sogar ausgewandert sind. Aber das kann natürlich auch nicht jeder Mensch. Und eigeintlich würde ich Ungarn auch
	nicht verlassen wollen. Ich hoffe, dass die Politiker*innen weiter für uns als Community kämpfen werden. Allerdings werden
	auch die queeren Politiker*innen mit Hassnachrichten und Drohungen konfrontiert. Die Lage in ländlichen Regionen ist noch
	schlimmer. Als juger, queerer Mensch auf dem Land, hat man kaum Möglichkeiten, sich zu entfalten.
</Paragraph>
<Paragraph>
	<strong>
		Wie wir sehen haben queere Menschen überall Herausforderungen, denen sie sich stellen müssen. In einigen Länder sind
		die Probleme nocht so verbreitet wie in anderen. Trotzdem sind sie da. Diese Darstellung der verscheidenen Länder
		verdeutlicht: wir müssen als Gesellschaft etwas ändern. Queere Menschen müssen gehört werden.
	</strong><br />
	<span class="author">(von Gabriela Brzezon)</span>
</Paragraph>
<enhanced:img
	src="../../assets/images/Foto_3.jpg"
	sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px)1080px, 1280px"
	class="pic"
/>
{#if showScrollButton}
	<button on:click={scrollToTop}><ArrowUp size={32} /></button>
{/if}

<style lang="scss">
	.author {
		color: #7a7a7a;
	}

	button {
		position: sticky;
		bottom: 2rem;
		height: 50px;
		width: 50px;
		background-color: white;
		border-radius: 50%;
		align-self: center;
		cursor: pointer;
	}

	button:hover {
		box-shadow: 0 0 10px -3px black;
	}

	picture {
		align-self: center;

		.pic {
			width: auto;
			height: auto;
		}
	}
</style>
