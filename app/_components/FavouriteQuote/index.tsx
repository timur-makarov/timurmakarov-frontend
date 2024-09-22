import { getLocale } from '@/app/_lib/utils/i18n'
import messageByLocale from '@/app/_assets/messageByLocale'

export default async function FavouriteQuote() {
  const locale = getLocale()

  return (
    <div className="mt-8 px-2 lg:px-0">
      <h2 className="text-3xl font-semibold mb-4">{messageByLocale.favoriteQuote.title[locale]}</h2>
      <p className="max-w-[680px]">
        Experiences generate emotions. Emotions generate values. Values generate narratives
        of meaning. And people who share similar narratives of meaning come together to generate
        religions. The more effective (or affective) a religion, the more industrious and
        disciplined the adherents. And the more industrious and disciplined the adherents, the more
        likely the religion is to spread to other people, to give them a sense of self-control and a
        feeling of hope. These religions grow and expand and eventually define in-groups versus
        out-groups, create rituals and taboos, and spur conflict between groups with opposing
        values. These conflicts must exist because they maintain the meaning and purpose for people
        within the group.
        <br />
        <br />
        Therefore, it is the conflict that maintains the hope. So, we’ve got it backward: everything
        being fucked doesn’t require hope; hope requires everything being fucked.
        <br />
        <br />
        The sources of hope that give our lives a sense of meaning are the same sources of division
        and hate. The hope that brings the most joy to our lives is the same hope that brings the
        greatest danger. The hope that brings people closest together is often the same hope that
        tears them apart.
        <br />
        <br />
        Hope is, therefore, destructive. Hope depends on the rejection of what currently is.
        <br />
        <br />
        Because hope requires that something be broken. Hope requires that we renounce a part of
        ourselves and/or a part of the world. It requires us to be anti-something.
        <br />
        <br />
        This paints an unbelievably bleak picture of the human condition. It means that our
        psychological makeup is such that our only choices in life are either perpetual conflict or
        nihilism—tribalism or isolation, religious war or the Uncomfortable Truth.
        <br />
        <br />
        Nietzsche believed that none of the ideologies generated by the scientific revolution would
        hold up in the long run. He believed that, one by one, they would slowly kill each other off
        and/or collapse from within. Then, after a couple of centuries, the real existential crisis
        would begin. Master morality would have been corrupted. Slave morality would have imploded.
        We would have failed ourselves. For human frailties are such that everything we produce must
        be impermanent and unreliable.
        <br />
        <br />
        Nietzsche instead believed that we must look beyond hope. We must look beyond values. We
        must evolve into something “beyond good and evil.” For him, this morality of the future had
        to begin with something he called <i>amor fati</i>, or “love of one’s fate”: “My formula for
        greatness in a human being,” he wrote, “is <i>amor fati</i>: that one wants nothing to be
        different, not forward, not backward, not in all eternity. Not merely bear what is
        necessary, still less conceal it—all idealism is mendacity in the face of what is
        necessary—but love it.”
        <br />
        <br />
        <i>Amor fati</i>, for Nietzsche, meant the unconditional acceptance of all life and
        experience: the highs and the lows, the meaning and the meaninglessness. It meant loving
        one’s pain, embracing one’s suffering. It meant closing the separation between one’s desires
        and reality not by striving for more desires, but by simply desiring reality.
        <br />
        <br />
        It basically meant: hope for nothing. Hope for what already is—because hope is ultimately
        empty. Anything your mind can conceptualize is fundamentally flawed and limited and
        therefore damaging if worshipped unconditionally. Don’t hope for more happiness. Don’t hope
        for less suffering. Don’t hope to improve your character. Don’t hope to eliminate your
        flaws. Hope for this. Hope for the infinite opportunity and oppression present in every
        single moment. Hope for the suffering that comes with freedom. For the pain that comes from
        happiness. For the wisdom that comes from ignorance. For the power that comes from
        surrender.
        <br />
        <br />
        And then act despite it.
        <br />
        <br />
        This is our challenge, our calling: To act without hope. To not hope for better. To be
        better. In this moment and the next. And the next. And the next.
        <br />
        <br />
        Everything is fucked. And hope is both the cause and the effect of that fuckedness. This is
        hard to swallow, because weaning ourselves off the sweet nectar of hope is like pulling a
        bottle away from a drunk. Without it, we believe we’ll fall back into the void and be
        swallowed by the abyss. The Uncomfortable Truth frightens us, and so we spin stories and
        values and narratives and myths and legends about ourselves and the world to keep that truth
        at bay.
        <br />
        <br />
        But the only thing that frees us is that truth: You and I and everyone we know will die, and
        little to nothing that we do will ever matter on a cosmic scale. And while some people fear
        that this truth will liberate them from all responsibility, that they&apos;ll go snort an
        eight ball of cocaine and play in traffic, the reality is that this truth scares them
        because it liberates them to responsibility. It means that there’s no reason to not love
        ourselves and one another. That there’s no reason to not treat ourselves and our planet with
        respect. That there’s no reason to not live every moment of our lives as though it were to
        be lived in eternal recurrence. - <b>Mark Manson</b>
      </p>
    </div>
  )
}
