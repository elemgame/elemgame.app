<template>
  <div class="rules">
    <h1 class="text-3xl font-bold text-yellow-400 underline">Rules of Elemental Game v1</h1>

    <p>
      The rules for [Elemental Game](https://elemgame.github.io/), a blockchain-based game
      incorporating elements and elementals, from registration to gameplay interactions.
    </p>
    <p>
      Elemental Game combines strategic decision-making with the luck of the draw, encouraging
      players to manage their Mana and elemental choices wisely. The blockchain integration ensures
      a transparent, secure, and innovative gaming experience.
    </p>

    <h2 class="text-2xl font-bold text-yellow-400 underline">Registration</h2>

    <ol class="list-decimal">
      <li>
        Creating an Account**: Visit the Elemental Game official website or app and choose the
        “Create Character” or “Sign Up” option.
      </li>
      <li>
        Character Customization**: Select the appearance, elemental affiliation (Earth, Water, or
        Fire), and name for your character. Customize additional attributes if the game allows.
      </li>
      <li>
        Registration Payment**: Pay the registration fee using the native blockchain tokens of
        Elemental Game. Send the required token amount to the game’s smart contract address via an
        integrated or external blockchain-supported wallet.
      </li>
      <li>
        Mana Allocation**: Upon successful transaction verification, your character is credited with
        an initial amount of Mana, the in-game currency used for challenges.
      </li>
      <li>
        Gasless Transactions**: Mana and your character’s account facilitate gasless transactions
        within the game, making gameplay more accessible and reducing the need for additional
        transaction fees.
      </li>
      <li>
        Readiness**: With registration complete, you can immediately begin participating in
        challenges and battles within Elemental Game.
      </li>
    </ol>

    <h2 class="text-2xl font-bold text-yellow-400 underline">Gameplay</h2>

    <ol class="list-decimal">
      <li>
        Elements:
        <ul class="mt-2 list-outside list-disc space-y-1 ps-5">
          <li>
            Each player chooses from the primary elements - Earth (Rock), Water, or Fire - in a
            strategic battle reminiscent of rock-paper-scissors.
          </li>
          <li>
            Earth absorbs Water, Water extinguishes Fire, and Fire melts Earth in the game's
            triangular balance of power.
          </li>
        </ul>
      </li>
      <li>
        Elementals:
        <ul class="mt-2 list-outside list-disc space-y-1 ps-5">
          <li>
            Each player is associated with an elemental being corresponding to their chosen element.
          </li>
          <li>
            Elementals are Earth Golem, Water Nymph, and Fire Sprite, each providing unique
            abilities and protections.
          </li>
        </ul>
      </li>
      <li>
        Mana Betting:
        <ul class="mt-2 list-outside list-disc space-y-1 ps-5">
          <li>
            Players bet Mana on each match, with both participants wagering an equal amount to
            ensure fairness.
          </li>
          <li>
            The outcome of the battle determines the redistribution of Mana, with the winning
            element claiming the pot.
          </li>
        </ul>
      </li>
      <li>
        Elemental Interactions:
        <ul class="mt-2 list-outside list-disc space-y-1 ps-5">
          <li>
            In the event of a disadvantageous matchup (e.g., Water vs. Earth), a player can invoke
            their elemental to protect a portion of their Mana.
          </li>
          <li>
            The protection ratio is tier-based:
            <ul class="mt-2 list-outside list-[square] space-y-1 ps-5">
              <li>Common Elemental: Protects 10% of Mana.</li>
              <li>Rare Elemental: Protects 20% of Mana.</li>
              <li>Legendary Elemental: Protects 40% of Mana.</li>
              <li>Immortal Elemental: Protects 80% of Mana.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Upgrading Elementals:
        <ul class="mt-2 list-outside list-disc space-y-1 ps-5">
          <li>Players can upgrade their elementals using Mana earned from battles.</li>
          <li>
            Higher-level elementals offer more significant protection and occasionally, special
            gameplay abilities.
          </li>
        </ul>
      </li>
      <li>
        Winning the Game:
        <ul class="mt-2 list-outside list-disc space-y-1 ps-5">
          <li>
            Matches are played in rounds, with the best of three or five determining the winner of a
            game session.
          </li>
          <li>
            Rankings and leaderboards reflect the success of players, based on their win-loss
            records and accumulated Mana.
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<style>
.rules {
  margin: 2rem 0;
  padding: 0 2rem;
}
.rules h1 {
  margin-bottom: 1rem;
}
.rules h2 {
  margin: 1rem 0;
}
@media (min-width: 1024px) {
  .rules {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
    padding-left: 3rem;
  }
}
</style>
<script setup lang="ts"></script>
