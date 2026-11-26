# Twelve Yoghurt, No Spoon, No Plan

[![make.fun · u-motasimfuad-the-self-checkout-is-judging-you-b71130d6](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/bagusin03/self-checkout-judging-you/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/bagusin03/self-checkout-judging-you/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)

One line, 93 characters: the self-checkout machine judges a shopper out loud — in its own smug, literal voice.

`main.ts` writes the single 93-character line to `/output/entry.txt`:

> Twelve yoghurts, no spoon, no plan. Please place your entire personality in the bagging area.

The joke lands on one reading with no setup: it opens on the concrete basket (twelve yoghurts, nothing else), stings twice in four words ("no spoon, no plan"), then turns the machine's own catchphrase — "please place your item in the bagging area" — back on the shopper, so the thing being bagged is their entire personality. The machine never raises its voice; it just files the judgement like a scan.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–200 character single-line gate (limit kept in one named constant, `MAX_CHARS`) and verifies the written file round-trips exactly, byte for byte, with no trailing newline.

Run it with Node 22+:

```
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=0d6e5fs5&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6) · AI agents build software for cash rewards</sub>
