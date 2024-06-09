<script lang="ts">
	import ArticleLink from '$lib/components/ArticleLink.svelte';
</script>

<h1 style="align-self: center;">JOA!</h1>

<div class="article-container">
	<ArticleLink headline="Das Leben als queere Person in der EU">
		<div slot="image">
			<enhanced:img
				src="../assets/images/Foto_1.jpg"
				sizes="(max-width:600px) 540px, (max-width:1080px) 768px, (max-width: 1400px) 1080px, 1280px"
				class="image"
			/>
		</div>
		Fühlst du dich sicher in deinem Land? Hast du Angst davor gesehen zu werden? Diese Fragen stellen sich viele tausende
		queere Menschen in verschiedenen Ländern in der EU täglich. Viele dieser Personen haben weiterhin Angst ihre Sexualität
		in der Öffentlichkeit zu zeigen, aufgrund der Angst, diskriminiert zu werden.
	</ArticleLink>
	<ArticleLink headline="Der ultimative politische Artikel">
		Dies ist ein sehr wichtiger Artikel, der unbedingt gelesen werden sollte. Mit diesem Artikel verdeut- lichen wir
		nämlich, wie viel Mühe wir uns gegeben haben, dieses tolle Projekt umzusetzen.
	</ArticleLink>
	<ArticleLink headline="Die Fußball Europameisterschaft ">
		Dieser Artikel beinhaltet ein Bild von einem Fußballspiel. Gerade ist EM und manche Leute finden das anscheinend
		immens wichtig. Jap, Fußball ist toll. Bei der letzten Frauenfußball WM hat übri- gens Spanien gewonnen.
	</ArticleLink>
	<ArticleLink headline="Sport für queere Menschen in Hamburg">
		Apropos Sport: in Hamburg gibt es einen tollen queeren Sportverein „Startschuss - Queer Sport Hamburg e.V.“. Der
		Verein bietet unter anderem Basketball, Fußball, Bowling, Segeln, Darts, Kung Fu, Schwimmen und viele andere
		Sportarten an. Der Trans*-Fußballtref trainiert zum Beispiel jeden Mittwoch in St. Georg. Übrigens suchen sie noch
		Trainer*innen!
	</ArticleLink>
	<ArticleLink headline="Lieben und lieben lassen -Saskia Michalski">
		Da ich verantwortlich bin für die Gestaltung der Artikel, mache ich jetzt einfach Werbung für ein queeres Buch.
		Saskia erzählt in dem Buch „Lieben und Lieben lassen“ vom Leben und Lieben als queere Person. Saskia lebt Polyamor
		und hat mehrere Partner*innen. In dem Buch erzählt Saskia von Comming Outs, polyamorer und queerer Liebe und vielen
		weiteren Dingen rund um Liebe und Selbstliebe. Höchstprofesoinelle Buchrezension: „Das Buch ist toll!“
	</ArticleLink>
	<ArticleLink headline="Die CSD Saison ist eröffnet!">
		Jedes Jahr gehen Millionen Menschen auf die Straße um für queere Rechte zu demonstrieren. Der Anfang des Christopher
		Streets Day (CSD) ist auf eine Polizeirazzia in einer queerfreundlichen Bar im Stonewall Inn am 28. Juni 1969
		zurückzuführen. Damals gab es in New York (und eigentlich überall sonst) unglaublich Trans- und Queerfreundliche
		Gesetzeslagen. Gewaltsame Kontrollen an queeren Treffpunkten wurden unter Vorwänden immer wieder durchgeführt und
		brachten Poli- zeigewalt und Verhaftungen mit sich. Bei der Razzia am 28. Juni wurden queere Menschen von
		Polizeibeamten auf menschenverachtende Weise gedemütigt, indem sie gezwungen wurden, sich auszuziehen. Nach diesem
		Vorfall setzten sich die Besucher*innen des Stonewall Inn gemeinsam zur Wehr. Nadem eine lesbische Frau Wiederstand
		leistete, taten es ihr andere gleich. Statt abzuziehen verbarrikadierte sich die Polizei in der Bar, während
		Demonstrierende auf ihre Missstände aufmerksam machten.
	</ArticleLink>
</div>

<style lang="scss">
	.article-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		.image {
			width: 120px;
			height: auto;
		}
	}
</style>
