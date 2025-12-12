import React, { useState, useEffect } from 'react';

// ============================================
// CONTENT DATA - Edit this to change content
// ============================================

const siteConfig = {
  title: "Iron Sharpens Iron",
  subtitle: "A Letter to Brother Rich",
  verse: "Proverbs 27:17",
  epigraph: "Iron sharpens iron, So one man sharpens another."
};

const introduction = {
  salutation: "To Rich, a brother in Messiah, called to teach and proclaim the ways of YHVH:",
  paragraphs: [
    "Grace to you and peace from God our Father and the Lord Yeshua the Messiah. I give thanks for your zeal for the Torah and your desire to call God's people to righteousness. Your labor in teaching is not unnoticed, and I trust that your heart is to honor the Word of the Living God.",
    "Yet as one who also seeks to walk in truth, I am compelled to write to you concerning certain matters of doctrine where I believe correction is needed. For as it is written, 'Iron sharpens iron, so one man sharpens another' (Proverbs 27:17). It is in this spirit — not of accusation, but of brotherly appeal — that I bring these things before you.",
    "If your positions are sound, they will withstand scrutiny. If they contain error, I trust you would want to know, that you might not lead others astray. For we who teach will be judged with greater strictness (James 3:1).",
    "This letter addresses two of your primary teachings that I believe are in error:"
  ],
  twoArguments: [
    {
      title: "1. \"Divorce and remarriage is adultery\"",
      summary: "You teach that a divorced believing woman remains permanently one-flesh with her ex-husband and cannot remarry without committing adultery. But Torah explicitly contradicts this — Numbers 30:9 says she has **no husband**, Deuteronomy 24:2 says she **may go and become another man's wife**, and Exodus 21:10-11 says she **goes out free** if her husband fails to provide. You quote passages about married women (*hypandros* — \"under a husband\") and misapply them to women Torah explicitly classifies as NOT under a husband. Worse, your framework punishes the very women Malachi 2 defends — women who were **treacherously divorced BY their husbands**. Malachi condemns the men who dealt treacherously; your framework binds permanent celibacy on the women those men wronged."
    },
    {
      title: "2. \"Age 20 is the minimum age for marriage\"",
      summary: "You teach that no woman under 20 can be lawfully married, and any union before 20 is invalid. But this requirement appears nowhere in Torah. It contradicts passages that hold younger women accountable as wives (Deuteronomy 22:23-24 calls the betrothed na'ara a \"wife\" and charges her with adultery). It contradicts God Himself calling a woman married in her youth \"your wife by covenant\" (Malachi 2:14). And it actually **removes** the protections Torah designed — your framework makes Exodus 22:16-17 unenforceable for 18-19 year olds. Furthermore, by calling 18-19 year old women \"children\" and their marriages \"child brides,\" you are labeling every man who lawfully marries an 18 or 19 year old a pedophile and pervert. That is bearing false witness against brothers who have broken no law — civil or biblical."
    }
  ],
  ironySummary: "In both cases, you are doing the very thing that \"enforced monogamy\" Christians do to you regarding polygyny — binding where Torah has not bound, ignoring explicit permissions in Scripture, and using disputed interpretations to override clear Torah statutes. You know exactly how it feels when people do this to you. Yet you turn around and do it to divorced women, divorced men, and 18-19 year old lawfully wedded people or those seeking marriage in that age group.",
  notes: [
    {
      title: "A note on civil law",
      content: "This letter addresses theological arguments about biblical marriage. I affirm the importance of obeying the laws of the land (Romans 13:1-7), and I am not advocating for marriage to anyone other than legal adults under civil law."
    },
    {
      title: "A note on where we likely agree",
      content: "I want to be clear: I am fervently against the modern practice of women divorcing their husbands for any reason at all, and I do not advocate for men marrying women who have unlawfully divorced their husbands for unbiblical reasons. I suspect we agree very strongly on this. The serial divorce culture in the modern West is an abomination. But in your opposition to this evil, you are painting with such a broad brush that lawfully divorced women — and women who were treacherously divorced by their husbands — are bound in permanent celibacy with no biblical remedy."
    }
  ]
};

const parts = [
  { id: 1, title: "Divorce and Remarriage Is NOT Adultery", subtitle: "Your framework contradicts Torah, creates logical impossibilities, and misapplies Scripture" },
  { id: 2, title: "The Age 20 Requirement Is NOT in Torah", subtitle: "You are adding to God's law and removing His protections" },
  { id: 3, title: "The Damage Done", subtitle: "You are doing the very thing you condemn others for every day" }
];

const sections = [
  {
    id: 1,
    part: 1,
    title: "Numbers 30:9",
    subtitle: "Torah Treats Divorced Women as Having No Husband",
    lead: "This may be the single most important argument in this letter.",
    position: {
      text: "A magic paper does not dissolve a marriage between two Believers, it's merely a record to prevent immorality.",
      source: "Marriage Law Worksheet 2025"
    },
    scriptures: [
      {
        ref: "Numbers 30:9 ",
        text: "But the vow of a widow or of a **divorced woman**, everything by which she has bound herself, **shall stand against her**."
      }
    ],
    content: [
      { type: "p", text: "Rich, Numbers 30 establishes the hierarchy of vow authority:" },
      { type: "ul", items: [
        "**A daughter under her father:** Father can annul her vows (v. 3-5)",
        "**A married woman:** Husband can annul her vows (v. 10-15)",
        "**A widow:** No one can annul — her vows stand (v. 9)",
        "**A divorced woman:** No one can annul — her vows stand (v. 9)"
      ]},
      { type: "p", text: "**Torah explicitly places the divorced woman in the exact same category as the widow.**" },
      { type: "p", text: "Why does a widow have no one to annul her vows? Because her husband is **dead**. She has no husband. That's why her vows \"stand against her.\"" },
      { type: "p", text: "Torah treats the divorced woman **exactly the same way**. Her vows stand against her. No husband can annul them." },
      { type: "p", text: "But Rich, if divorce \"does not dissolve\" the one-flesh union as you claim:" },
      { type: "ul", items: [
        "She is still married (one-flesh with her ex-husband)",
        "Her husband should still have authority over her vows",
        "But Numbers 30:9 explicitly says he does NOT"
      ]},
      { type: "p", text: "**Torah itself treats the divorced woman as NOT having a husband.** She is in the same legal category as a woman whose husband is dead. If she still had a husband, he would have authority over her vows. But he doesn't. Because divorce ended that authority." },
      { type: "h2", text: "The Septuagint Confirms This" },
      { type: "p", text: "The Septuagint (LXX) — the Greek translation of the Hebrew Scriptures used by Jesus and the apostles — translates Numbers 30:9 as:" },
      { type: "scripture", ref: "Numbers 30:9 (LXX)", text: "καὶ εὐχὴ **χήρας** καὶ **ἐκβεβλημένης**... μενοῦσιν αὐτῇ — \"And the vow of a **widow** and of **one who has been cast out**... shall stand against her.\"" },
      { type: "p", text: "The Greek word for the divorced woman is **ἐκβεβλημένης** (ekbeblēmenēs) — the perfect passive participle of ἐκβάλλω (ekballō), meaning \"one who has been cast out\" or \"expelled.\" This is significant: the LXX describes her as someone who has been **released/expelled** from her husband's household and authority. She is no longer under him." },
      { type: "p", text: "Both the Hebrew (גְּרוּשָׁה, gerushah) and the Greek (ἐκβεβλημένη) describe a woman who has been **sent away** — not a woman still bound to her husband. Torah and the LXX agree: the divorced woman has no husband to annul her vows because she has been **released** from that authority." }
    ],
    question: "Rich, Numbers 30:9 places the divorced woman in the exact same category as the widow — both have vows that \"stand against her\" because neither has a husband to annul them. If divorce \"does not dissolve\" the marriage, why does Torah treat her as having no husband? Why can't her \"husband\" annul her vows like any other husband can under Numbers 30:10-15?"
  },
  {
    id: 2,
    part: 1,
    title: "Exodus 21:10-11",
    subtitle: "If He Doesn't Provide, She Goes Out Free",
    scriptures: [
      {
        ref: "Exodus 21:10-11 ",
        text: "If he takes to himself another woman, he may not reduce her food, her clothing, or **her conjugal rights**. If he will not do these three things for her, then **she shall go out for nothing, without payment of money**."
      }
    ],
    content: [
      { type: "p", text: "This passage establishes that a husband has ongoing obligations to his wife: food, clothing, and marital rights. If he fails to provide these, she \"goes out free.\"" },
      { type: "p", text: "Now consider your position that divorce does not dissolve one-flesh. If a man divorces his wife but remains \"one-flesh\" with her as you claim:" },
      { type: "ol", items: [
        "He is still her husband (one-flesh)",
        "He still owes her food, clothing, and marital rights (Exodus 21:10)",
        "He is not providing these (divorced men don't)",
        "Therefore, she goes out FREE (Exodus 21:11)"
      ]},
      { type: "p", text: "You cannot escape this by saying \"he divorced her, so he's released from obligations.\" If divorce releases HIM from obligations, then divorce DOES something. If divorce does something for him, it does something for her." },
      { type: "h2", text: "Your Only Options" },
      { type: "ul", items: [
        "**If divorce releases the man from Ex 21:10 obligations:** Then divorce accomplishes something. She is no longer owed these things, meaning she is no longer bound as wife. She goes FREE.",
        "**If divorce does NOT release the man:** Then he still owes her food, clothing, marital rights forever. He won't provide them. She goes FREE under Ex 21:11."
      ]},
      { type: "p", text: "**Either way, she goes out free. There is no third option where divorce releases the man from obligations while keeping the woman permanently bound.**" },
      { type: "h2", text: "You Have Been Asked This Directly" },
      { type: "p", text: "On December 10, 2025, you were asked directly on Instagram: \"If the divorced woman is still bound, so is the man who divorces her — he is bound to provide her food, clothing, and marital rights, isn't he?\"" },
      { type: "p", text: "You did not answer. Because there is no good answer. Your framework cannot explain how the man is released from his obligations while the woman remains permanently bound. **The asymmetry exposes the error.**" }
    ],
    question: "Rich, how do you reconcile your position that divorce \"does not dissolve\" one-flesh with Exodus 21:10-11? If a divorced man is still one-flesh with his ex-wife, he still owes her food, clothing, and marital rights. If he doesn't provide them, she \"goes out free.\" You were asked this directly and did not answer. Where is the flaw in this logic?"
  },
  {
    id: 3,
    part: 1,
    title: "The \"Never Divorce\" Provisions",
    subtitle: "Why Specify \"Never\" If Divorce Is Always Impossible?",
    scriptures: [
      {
        ref: "Deuteronomy 22:19 ",
        text: "And they shall fine him a hundred shekels of silver... and she shall remain his wife; **he cannot divorce her all his days**."
      },
      {
        ref: "Deuteronomy 22:29 ",
        text: "...and she shall become his wife because he has violated her; **he cannot divorce her all his days**."
      }
    ],
    content: [
      { type: "p", text: "Rich, in these SPECIFIC cases—a man who falsely accused his wife of not being a virgin, and a man who violated a virgin—Torah says he can **NEVER** divorce her." },
      { type: "p", text: "**This is a PUNISHMENT.** But what exactly is the punishment?" },
      { type: "p", text: "The punishment is that he is **permanently bound to his obligations to her**. He can never escape his duty to provide food, clothing, and conjugal rights (Exodus 21:10). He's stuck forever." },
      { type: "h2", text: "This Only Makes Sense If Divorce Normally Releases Him" },
      { type: "p", text: "If divorce doesn't release a man from his obligations anyway, then \"you can never divorce her\" is no punishment at all. It would be like saying \"as punishment, you must continue breathing.\"" },
      { type: "p", text: "The punishment has teeth precisely BECAUSE in normal circumstances:" },
      { type: "ul", items: [
        "Divorce DOES release the man from his marital obligations",
        "Divorce DOES free him from the duty to provide for her",
        "Divorce DOES allow him to walk away"
      ]},
      { type: "p", text: "**By removing his ability to divorce, Torah removes his escape hatch.** He must provide for her until the day he dies. That's the punishment." },
      { type: "p", text: "This proves that in OTHER cases, divorce IS effective and DOES release both parties. Otherwise these \"never divorce\" provisions are meaningless." }
    ],
    question: "If divorce doesn't release the man from his obligations anyway, how is \"he may not divorce her all his days\" a punishment? The punishment only has force if divorce NORMALLY releases him. Doesn't this prove divorce is effective?"
  },
  {
    id: 4,
    part: 1,
    title: "Priestly Marriage Restrictions",
    subtitle: "Why Prohibit Priests From Marrying Divorced Women If No One Can?",
    scriptures: [
      {
        ref: "Leviticus 21:7 ",
        text: "They shall not take a woman who is profaned by harlotry, nor shall they take **a woman divorced from her husband**; for he is holy to his God."
      },
      {
        ref: "Leviticus 21:14 ",
        text: "A widow, or a divorced woman, or one who is profaned by harlotry, these he may not take; but rather he is to marry **a virgin** of his own people."
      }
    ],
    content: [
      { type: "p", text: "Rich, Torah gives SPECIFIC restrictions on who priests can marry. Regular priests cannot marry divorced women or prostitutes. High priests have even stricter requirements — they cannot marry widows either, only virgins." },
      { type: "p", text: "**But why would Torah need to prohibit priests from marrying divorced women if NO ONE could marry them anyway?**" },
      { type: "p", text: "The very existence of this priestly restriction implies that NON-priests CAN marry divorced women. Otherwise the prohibition is meaningless — like saying \"priests cannot fly\" when no one can fly." },
      { type: "h2", text: "Understanding the Context of Leviticus 21" },
      { type: "p", text: "Leviticus 21 is addressed specifically to **the sons of Aaron** — the hereditary Aaronic priesthood — not to all Israel. Torah never applies these marriage restrictions to laymen." },
      { type: "p", text: "Leviticus 21–22 constitutes the **priestly holiness code** — a separate standard of ritual purity required for approaching the sanctuary. These are not universal moral laws; they are specialized requirements for those who serve at the altar." },
      { type: "p", text: "Priestly regulations exist to preserve **ritual purity for temple service**, not to establish universal marriage law. If they were universal, Israelite laymen would have been prohibited from marrying widows — yet Torah not only permits but actually **commands** such marriages in certain cases. The levirate law (Deuteronomy 25:5-10) **requires** a brother-in-law to marry his deceased brother's widow. Ruth and Boaz is the clearest example: Boaz was not merely permitted to marry the widow Ruth — he was fulfilling the kinsman-redeemer obligation. Torah *demanded* it." },
      { type: "h2", text: "Preempting the \"Inherent Immorality\" Argument" },
      { type: "p", text: "You might argue: \"The priestly restriction shows it's inherently immoral, just more so for priests.\" But this doesn't hold up:" },
      { type: "ul", items: [
        "**High priests cannot marry WIDOWS** (Lev 21:14)",
        "**Widows are clearly lawful for laymen** — in fact, Torah *commands* levirate marriage to widows (Deut 25:5-10). Boaz didn't just marry Ruth; he was obligated to as kinsman-redeemer",
        "**Therefore priestly restrictions ≠ inherent immorality**"
      ]},
      { type: "p", text: "If the high priest's restriction on widows doesn't make widow-marriage immoral for laymen, then the priest's restriction on divorced women doesn't make divorced-woman-marriage immoral for laymen." },
      { type: "p", text: "**These are purity standards for the priesthood, not universal moral prohibitions.** The restriction only makes sense if laymen CAN do what priests cannot." },
      { type: "h2", text: "You Know This — When It Suits You" },
      { type: "p", text: "Rich, you make this exact argument when defending polygyny. When people cite 1 Timothy 3:2 (\"husband of one wife\") against plural marriage, you respond:" },
      { type: "quote", text: "If this is written to overseers, it only applies to overseers, which would actually imply that the church is allowed to practice polygyny because this is only written to overseers in the New Testament.", source: "\"David's Two Wives\" video [00:36:28]" },
      { type: "p", text: "Exactly right! Pastoral standards apply to pastors, not laymen. The restriction on overseers doesn't bind the laity." },
      { type: "p", text: "**But you abandon this principle the moment it helps divorced women.** When it comes to Leviticus 21:7 (priests cannot marry divorced women), suddenly you want to apply priestly restrictions to ALL believers through 1 Peter 2:9's \"royal priesthood.\" You've stated this explicitly:" },
      { type: "quote", text: "We are a royal priesthood as a whole in the Christian church and we... Jesus may have been teaching us in the gospels that we are to adhere to the priestly class commandment regarding divorced women rather than the layman commandment... The priests weren't to marry divorced women, so we don't marry divorced women.", source: "Interview with Pete Rambo (Dec 10, 2025) [~01:30:35]" },
      { type: "p", text: "You cannot have it both ways:" },
      { type: "ul", items: [
        "**On polygyny:** \"Pastoral standards only apply to pastors, not laymen\" ✓",
        "**On divorced women:** \"Priestly standards apply to ALL believers\" ✗"
      ]},
      { type: "p", text: "If 1 Timothy 3:2 (overseer standards) doesn't bind laymen regarding polygyny, then Leviticus 21:7 (priestly standards) doesn't bind laymen regarding divorced women. **Your own argument sets divorced women free.**" },
      { type: "h2", text: "Why Not the High Priest Standard?" },
      { type: "p", text: "Rich, there's another glaring problem with your \"royal priesthood\" argument. You appeal to Leviticus 21:7 — the **regular priest** standard — to prohibit marrying divorced women. But why stop there?" },
      { type: "p", text: "If we are truly a \"royal priesthood\" and should pursue the highest level of purity, shouldn't we look to the **high priest** standard?" },
      { type: "scripture", ref: "Leviticus 21:13-14 ", text: "He [the high priest] shall take a wife **in her virginity**. A widow, or a divorced woman, or one who is profaned by harlotry, these he may not take; but rather he is to marry **a virgin of his own people**." },
      { type: "p", text: "The high priest — the highest standard of priestly purity — could ONLY marry:" },
      { type: "ul", items: [
        "**A virgin** — not a widow, not divorced, not a former prostitute",
        "**Of his own people** — a believing Israelite"
      ]},
      { type: "p", text: "Note: The text itself distinguishes between priest vs. high priest standards. Torah never elevated the entire priesthood to the high priest's marriage requirements — only the high priest bore this stricter standard." },
      { type: "p", text: "If believers are a \"royal priesthood\" and must follow priestly marriage restrictions, why do you only apply the **regular** priest standard (no divorced women) while ignoring the **high** priest standard (virgins only)?" },
      { type: "p", text: "You claim to take the most conservative position:" },
      { type: "quote", text: "That's why I air on the most conservative end of this... the priests weren't to marry divorced women so we don't marry divorced women.", source: "Interview with Pete Rambo (Dec 10, 2025) [~01:31:00]" },
      { type: "p", text: "But the most conservative end isn't Leviticus 21:7 — it's Leviticus 21:13-14. The truly conservative position would be:" },
      { type: "ul", items: [
        "**No widows** — High priests couldn't marry them",
        "**No divorced women** — High priests couldn't marry them", 
        "**No former prostitutes** — High priests couldn't marry them",
        "**ONLY believing virgins** — The sole permitted category"
      ]},
      { type: "p", text: "By your logic — that \"royal priesthood\" means priestly marriage restrictions apply to ALL believers — **Salmon could NOT have married Rahab.** If all believing men must follow the high priest standard, Rahab was a former prostitute and therefore forbidden. Yet you defend Rahab's marriage passionately." },
      { type: "p", text: "By your logic, **widows could NOT remarry** to any believing man. Yet you teach widows CAN remarry." },
      { type: "p", text: "You're cherry-picking which priestly standard to apply. You grab Leviticus 21:7 to bind divorced women, but you ignore Leviticus 21:13-14 which would bind widows and require virgin-only marriages. **That's not conservatism — that's selective application to reach a predetermined conclusion.**" }
    ],
    question: "Why does Torah specifically prohibit priests from marrying divorced women if no man can marry them anyway? You yourself argue that pastoral standards 'only apply to overseers' and don't bind laymen — so why would priestly standards from Leviticus 21:7 bind all believers? And if we truly are a 'royal priesthood' pursuing the highest purity, why do you apply the regular priest standard but not the high priest standard that would require virgin-only marriages?"
  },
  {
    id: 5,
    part: 1,
    title: "God Divorced Israel",
    subtitle: "If Divorce Accomplishes Nothing, Did God Do Something Meaningless?",
    scriptures: [
      {
        ref: "Jeremiah 3:8 ",
        text: "And I saw that for all the adulteries of faithless Israel, I had **sent her away and given her a writ of divorce**, yet her treacherous sister Judah did not fear."
      }
    ],
    content: [
      { type: "p", text: "Rich, God Himself gave Israel a certificate of divorce. God used the same mechanism described in Deuteronomy 24:1. If divorce \"does not dissolve\" the covenant as you claim, then what did God do here? Did God perform a meaningless ritual?" },
      { type: "h2", text: "The Sequence Matters" },
      { type: "p", text: "Look carefully at what Jeremiah 3:7-8 tells us:" },
      { type: "scripture", ref: "Jeremiah 3:7-8 ", text: "I thought, 'After she has done all these things **she will return to Me**'; but she did not return... And I saw that for all the adulteries of faithless Israel, **I had sent her away and given her a writ of divorce**." },
      { type: "p", text: "God expected Israel to return. While released, she was SUPPOSED to come back. Her sin during this period — though real — was the sin of a released woman. But she did not return. Instead, she \"joined\" other gods." },
      { type: "p", text: "**Once Israel joined others, Deuteronomy 24:4 kicked in.** Now she CANNOT return to her first husband. That open door was closed." },
      { type: "h2", text: "Compare This to Judah" },
      { type: "p", text: "Judah never received a certificate (Isaiah 50:1). She was NOT released. Yet she ALSO went after other gods — while still bound in covenant. This is why God says:" },
      { type: "scripture", ref: "Jeremiah 3:11 ", text: "Faithless Israel has proved herself **more righteous** than treacherous Judah." },
      { type: "p", text: "Think about this: **Israel's sin was LESS severe than Judah's** — even though both went after other gods. Why? Because Israel was released. She sinned as a free woman — it was rebellion and idolatry, but not treachery against an active covenant. Judah sinned while still bound — THAT is treachery." },
      { type: "p", text: "**The certificate made a real difference in how God judged their sin.** If the certificate accomplished nothing, why would Israel be \"more righteous\" than Judah?" },
      { type: "h2", text: "Why Did Messiah Have to Die?" },
      { type: "p", text: "Here's the theological problem the certificate created:" },
      { type: "ol", items: [
        "**God divorced Israel** — she was RELEASED (less guilt than Judah)",
        "**Israel was supposed to return** — the door was open",
        "**Israel joined other gods instead** — she didn't come back while she could",
        "**Deuteronomy 24:4 now applies** — she CANNOT return to her first husband",
        "**Messiah had to die** — so Israel enters a NEW covenant with a risen Lord, not \"returning to her former husband\""
      ]},
      { type: "p", text: "**This entire theology depends on the divorce being REAL.** If the certificate never released Israel, there's no Deuteronomy 24:4 problem to solve. If there's no problem, Messiah's death doesn't solve anything regarding Israel's return. And if the certificate accomplished nothing, Israel and Judah would bear equal guilt — but God Himself says Israel was \"more righteous.\"" }
    ],
    question: "If divorce certificates don't actually release the woman, why is 'faithless Israel' MORE RIGHTEOUS than 'treacherous Judah'? Both sinned — but Israel sinned while released, Judah while still bound. The certificate made a real difference in God's judgment. Why did Messiah have to die for Israel to return if she was never truly released?"
  },
  {
    id: 6,
    part: 1,
    title: "Malachi 2 in Context",
    subtitle: "This Passage Condemns Faithless Husbands, Not Remarrying Women",
    scriptures: [
      {
        ref: "Malachi 2:14-16 ",
        text: "YHVH has been a witness between you and **the wife of your youth**, against whom **you have dealt treacherously**, though she is your companion and your wife by covenant... 'For I hate divorce,' says YHVH, the God of Israel, 'and him who covers his garment with wrong,' says YHVH of hosts. **'So take heed to your spirit, that you do not deal treacherously.'**"
      }
    ],
    content: [
      { type: "p", text: "Look at who is being addressed:" },
      { type: "ul", items: [
        "\"The wife of **your youth**\" (***remember this***) — addressed to husbands",
        "\"**You** have dealt treacherously\" — the husband's treachery",
        "\"Him who covers his garment with wrong\" — condemning the treacherous husband"
      ]},
      { type: "p", text: "This passage condemns **faithless husbands who treacherously put away their wives**. The women are the victims here, not the perpetrators." },
      { type: "h2", text: "\"Hate Divorce\" or \"Hate Putting Away\"?" },
      { type: "p", text: "Many translations render this as God saying \"I hate divorce.\" But consider: **God Himself divorced Israel** (Jeremiah 3:8). God gave her a certificate and sent her away. Can God hate something He Himself did?" },
      { type: "p", text: "The better understanding is that God hates the **treacherous putting away** — when men abandon their wives WITHOUT proper documentation, leaving them in legal limbo. Not properly released, but not provided for either. THAT is treachery. THAT is what covers a man's garment with wrong." },
      { type: "p", text: "This is consistent with the put away vs. divorce distinction we'll examine later. Proper divorce with a certificate RELEASES the woman (Deut 24:1-2). Treacherous putting away WITHOUT a certificate abandons her in limbo — still technically bound, but cast out and unprovided for." },
      { type: "h2", text: "You Know This — When It Suits You" },
      { type: "p", text: "Rich, you read this passage as condemning men when you're arguing against serial monogamy:" },
      { type: "quote", text: "Malachi 2:15-16, which is where God says, 'I hate divorce.' Like, don't divorce your first wife. I hate when you guys do that... So, you practice serial monogamy. And God's like, I hate that. I gave you your wife. Raise up children with her. Do not be unfaithful to her. Do not kick her to the curb.", source: "\"Divinity of Marriage\" video [01:14:44]" },
      { type: "p", text: "You correctly identify that God hates when men \"kick their wives to the curb.\" The passage condemns the **husbands** who do this treacherously." },
      { type: "h2", text: "But Then You Punish the Women They Kicked to the Curb" },
      { type: "p", text: "Here's the devastating irony: Your framework takes the very women Malachi 2 defends — the wives who were treacherously put away, who were \"kicked to the curb\" by faithless husbands — and binds them in permanent celibacy." },
      { type: "ul", items: [
        "**Malachi 2 condemns:** The husband who dealt treacherously",
        "**Your framework punishes:** The wife he dealt treacherously WITH"
      ]},
      { type: "p", text: "The husband sins by treacherously putting her away. Then YOUR teaching tells her she can never remarry — potentially for 40+ years. **You are punishing the victim of the very sin Malachi condemns.**" },
      { type: "p", text: "God rebukes the MEN for their treachery. He does not say \"and the women they put away must remain celibate forever.\" That's YOUR addition — and it punishes the wrong party." }
    ],
    question: "You correctly read Malachi 2 as condemning men who 'kick their wives to the curb.' But then your framework binds permanent celibacy on the women those men kicked to the curb. How is punishing the victims of treacherous putting away consistent with a passage that condemns the treacherous husbands?"
  },
  {
    id: 7,
    part: 1,
    title: "The Death Penalty Problem",
    subtitle: "If Adultery Is the Only Grounds, When Would Divorce Ever Apply?",
    position: {
      text: "Divorce is only permitted for a wife's 'ʿerwâ' or 'nakedness' (Deut 24:1), i.e. her 'sexual immorality' as Jesus affirmed (Matt 5:32, 19:9).",
      source: "Marriage Law Worksheet 2025"
    },
    scriptures: [
      {
        ref: "Leviticus 20:10 ",
        text: "If there is a man who commits adultery with **another man's wife**, one who commits adultery with his friend's wife, the adulterer and the adulteress **shall surely be put to death**."
      },
      {
        ref: "Deuteronomy 22:22 ",
        text: "If a man is found lying with **a married woman**, then both of them shall die."
      },
      {
        ref: "Deuteronomy 19:16-19 ",
        text: "If a malicious witness rises up against a man to accuse him of wrongdoing... and if the witness is a false witness and he has accused his brother falsely, then you shall do to him just as he had intended to do to his brother."
      }
    ],
    content: [
      { type: "p", text: "Rich, you teach that 'nakedness' (עֶרְוָה, ervah) in Deuteronomy 24:1 means sexual immorality/adultery. This creates an impossible logical trap:" },
      { type: "h2", text: "The Two Horns of the Dilemma" },
      { type: "p", text: "**Horn 1: The husband HAS proof of adultery**" },
      { type: "ul", items: [
        "Torah prescribes DEATH, not divorce (Lev 20:10, Deut 22:22)",
        "Both the adulterer AND adulteress \"shall surely be put to death\"",
        "Divorce is not the prescribed remedy for proven adultery"
      ]},
      { type: "p", text: "**Horn 2: The husband does NOT have proof of adultery**" },
      { type: "ul", items: [
        "Writing a certificate that claims adultery is bearing false witness",
        "This is false witness in a CAPITAL case — adultery carries death",
        "Deuteronomy 19:16-19: The false witness receives the punishment he sought for his victim",
        "The husband who falsely claims adultery on the certificate becomes liable for DEATH"
      ]},
      { type: "h2", text: "There Is No Middle Ground" },
      { type: "p", text: "If adultery is the ONLY ground for divorce, then:" },
      { type: "ul", items: [
        "Proven adultery → death penalty, not divorce",
        "Unproven adultery → false witness, husband liable for death",
        "No adultery → no grounds for divorce at all"
      ]},
      { type: "p", text: "**Under your framework, divorce could NEVER legitimately be used.** Every divorce certificate would either be unnecessary (she should be executed) or fraudulent (he's bearing false witness)." },
      { type: "p", text: "This proves that 'ervah' in Deuteronomy 24:1 cannot mean adultery. It must refer to something that warrants divorce but NOT death — something less than a capital offense. The death penalty problem forces us to conclude that lawful grounds for divorce exist that are NOT adultery." }
    ],
    question: "If 'nakedness' means adultery, when would divorce ever legitimately be used? Proven adultery requires death (Lev 20:10). Claiming adultery without proof is false witness in a capital case — making the husband liable for death (Deut 19:16-19). Your interpretation makes divorce impossible to use lawfully."
  },
  {
    id: 8,
    part: 1,
    title: "Torah Calls Her His WIFE",
    subtitle: "The Second Marriage in Deuteronomy 24 Uses Marriage Language, Not Adultery Language",
    scriptures: [
      {
        ref: "Deuteronomy 24:2-4 ",
        text: "And she leaves his house and goes and **becomes another man's wife**, and if the latter **husband** turns against her and writes her a certificate of divorce... or if the latter **husband** dies who **took her to be his wife**..."
      }
    ],
    content: [
      { type: "p", text: "Rich, you've argued that the SECOND marriage in Deuteronomy 24 is actually adultery — but they aren't stoned because of \"mercy.\" You cite Joseph with Mary and Jesus with the adulteress. You claim:" },
      { type: "quote", text: "The reason she is not stoned to death is (1) the husband has not demanded her death, eg Joseph with Mary (Matt 1:19), and (2) mercy has always been lawful (Matt 9:13, Hosea 6:6)... First marriage = righteous. Second marriage = defiled. Remarriage to first = abomination.", source: "Your Instagram post (Dec 8, 2025)" },
      { type: "p", text: "This argument collapses under scrutiny. Torah itself tells us the SECOND marriage is NOT adultery:" },
      { type: "h2", text: "Problem 1: The Second Husband Is Called Her HUSBAND, She Is Called His WIFE" },
      { type: "scripture", ref: "Deuteronomy 24:3 ", text: "If the latter husband turns against her and writes her a certificate of divorce... or if the latter **husband** dies who took her to be his **wife**..." },
      { type: "p", text: "Torah calls the second man her \"husband\" (אִישׁ, ish — the standard word for husband) and says he \"took her to be his wife\" (לְקָחָהּ לוֹ לְאִשָּׁה, l'kachah lo l'ishah). She is HIS אִשָּׁה (ishah) — the second husband's wife. Not \"the woman he's sinning with.\" Not \"his adulteress.\" His WIFE. Torah treats the second marriage as a real marriage, not ongoing adultery being tolerated through mercy." },
      { type: "p", text: "The LXX confirms this. Deuteronomy 24:2 reads: **καὶ ἀπελθοῦσα γένηται ἀνδρὶ ἑτέρῳ** — \"and having departed, she becomes [belonging] to another man.\" Verse 3 calls the second man **ὁ ἀνὴρ ὁ ἔσχατος** (\"the latter husband\") and says he **ἔλαβεν αὐτὴν ἑαυτῷ γυναῖκα** — \"took her for himself as wife.\" Both Hebrew and Greek use standard marriage terminology, not adultery language." },
      { type: "h2", text: "Problem 2: Torah Has Adultery Language — And Doesn't Use It for the Second Marriage" },
      { type: "p", text: "When Torah describes adultery, it uses specific language:" },
      { type: "ul", items: [
        "**Leviticus 20:10:** \"A man who **commits adultery with** (יִנְאַף, yin'af) the wife of a man...\"",
        "**Deuteronomy 22:22:** \"If a man is found **lying with** (שֹׁכֵב עִם, shokev im) a woman married to a husband...\""
      ]},
      { type: "p", text: "But when describing the second marriage in Deuteronomy 24, none of this adultery language appears. Instead, Torah uses standard marriage terminology:" },
      { type: "ul", items: [
        "The second husband **\"took her to be his wife\"** (לָקַח, lakach) — standard marriage verb",
        "She is **\"his wife\"** (לְאִשָּׁה) — belonging to the SECOND husband, not still belonging to the first",
        "No נָאַף (adultery) language anywhere in the second marriage",
        "No שֹׁכֵב עִם (\"lying with\") language anywhere in the second marriage"
      ]},
      { type: "p", text: "**Torah knows how to describe adultery. It doesn't describe the second marriage that way.** If the second marriage were adultery being tolerated through mercy, why would Torah use marriage language instead of adultery language?" },
      { type: "h2", text: "Problem 3: No Atonement, No Punishment for the Second Marriage" },
      { type: "p", text: "If the second marriage is adultery covered by mercy, where is:" },
      { type: "ul", items: [
        "The sin offering required for the second marriage?",
        "The guilt offering?",
        "Any indication of wrongdoing by the second husband?",
        "The \"purge the evil from among you\" language used for actual adultery (Deut 22:22)?"
      ]},
      { type: "p", text: "Torah regulates the second marriage as legitimate — even allowing the SECOND husband to divorce HER with a certificate. You cannot divorce someone you're not married to. Torah treats the second marriage as a real marriage." },
      { type: "h2", text: "Problem 4: Why Add MORE Prohibition If the Second Marriage Is Already Sin?" },
      { type: "p", text: "If the second marriage is already adultery (a capital offense), why does v.4 need to add that returning to the first husband is an \"abomination\"? You don't pile \"abomination\" on top of capital sin being tolerated by mercy. The structure of the passage assumes the second marriage is lawful, and ONLY the return to the first husband after the second marriage is prohibited." },
      { type: "h2", text: "Problem 5: 'Defiled' Refers to Her Status Regarding the FIRST Husband, Not the Second Marriage" },
      { type: "p", text: "You claim \"defiled\" means the second marriage is sinful. But read v.4 carefully:" },
      { type: "scripture", ref: "Deuteronomy 24:4 ", text: "Her former husband who sent her away is not allowed to take her again to be his wife, since **she has been defiled**; for that is an abomination before YHVH." },
      { type: "p", text: "She is defiled **with respect to her first husband** — meaning she cannot return to him after having been in a second marriage. This is NOT saying her second marriage defiled her morally. It's saying her having been with the second husband makes her ineligible to return to husband #1. The defilement is relational to the first husband, not a moral condemnation of the second marriage." },
      { type: "p", text: "This is exactly why Messiah had to die for Israel — she was \"defiled\" (had gone after other gods) and could not simply return to her first husband (YHVH) under Deut 24:4. A new covenant was required." },
      { type: "h2", text: "Problem 6: Joseph and the Adulteress Don't Help Your Case About Second Marriages" },
      { type: "p", text: "**Joseph with Mary:** Yes, Joseph thought Mary had committed adultery — a betrothed woman who lies with another man IS committing adultery under Torah (Deut 22:23-24). Joseph had not yet consummated, Mary was visibly pregnant, and he assumed the worst. His decision to \"put her away quietly\" rather than expose her was mercy toward what he believed was actual adultery during an active betrothal." },
      { type: "p", text: "But this is completely different from the second marriage in Deuteronomy 24. Joseph's situation involves:" },
      { type: "ul", items: [
        "An ACTIVE betrothal covenant (not dissolved)",
        "Alleged sex with someone OTHER than her betrothed",
        "A woman still bound to Joseph"
      ]},
      { type: "p", text: "You're trying to use this to justify calling a SECOND MARRIAGE after divorce \"adultery tolerated through mercy.\" But in Deuteronomy 24, the woman has been RELEASED with a certificate from her first husband. She is NOT still bound to husband #1. She is free to become the second husband's wife (Deut 24:2). Joseph's mercy toward suspected adultery during an active betrothal doesn't justify calling a lawful second marriage after divorce \"adultery.\"" },
      { type: "p", text: "**Jesus and the adulteress (John 8):** This example is doubly problematic:" },
      { type: "ul", items: [
        "**Textual issue:** The passage (John 7:53-8:11) is widely disputed among scholars — it doesn't appear in the earliest manuscripts. Building doctrine on it is precarious.",
        "**Torah requirements not met:** Even accepting the story, Torah requires BOTH parties to be executed (Lev 20:10, Deut 22:22 — \"both of them shall die\"). Where was the man? His absence alone violates the Torah procedure.",
        "**No valid witnesses remained:** By the time Jesus said \"Let him who is without sin cast the first stone,\" all her accusers left. The 2-3 witnesses required by Torah (Deut 17:6, 19:15) were gone. There was no longer sufficient testimony for execution.",
        "**Jesus didn't show \"mercy\" to proven adultery** — He pointed out that the legal requirements for conviction weren't met. That's not the same as saying \"this is adultery but I'm being merciful.\""
      ]},
      { type: "p", text: "Neither example supports calling the Torah-regulated second marriage in Deuteronomy 24 \"adultery tolerated through mercy.\"" }
    ],
    question: "If the SECOND marriage in Deuteronomy 24 is adultery, why does Torah call the second man her 'husband,' say he 'took her to be his wife' (לְאִשָּׁה), use no adultery language (נָאַף, שֹׁכֵב עִם), regulate the second marriage with certificates, require no atonement, assign no punishment, and only prohibit return to the FIRST husband? Your 'mercy' argument cannot explain why Torah treats the second marriage as a real marriage."
  },
  {
    id: 9,
    part: 1,
    title: "The Category Error",
    subtitle: "You Quote Passages About 'Married Women' — But Divorced Women Aren't Married",
    lead: "This fundamental error runs throughout your entire framework.",
    position: {
      text: "Divorce from a believer, she's one flesh with that guy to the end of his life. And that's why I include Romans 7 at the bottom of this page...",
      source: "\"Divinity of Marriage\" video [01:04:23]"
    },
    scriptures: [
      {
        ref: "Romans 7:2 ",
        text: "For **the married woman** is bound by law to her husband while he is living; but if her husband dies, she is released from the law concerning the husband."
      },
      {
        ref: "Leviticus 20:10 ",
        text: "If there is a man who commits adultery with **another man's wife**..."
      },
      {
        ref: "Deuteronomy 22:22 ", 
        text: "If a man is found lying with **a married woman**..."
      }
    ],
    content: [
      { type: "p", text: "Rich, look at what Romans 7:2 actually says. It's talking about **\"a married woman\"** (Greek: *hē hypandros gynē* — literally \"the under-a-husband woman\"). Paul is describing the status of a woman who IS CURRENTLY UNDER A HUSBAND." },
      { type: "p", text: "But **Numbers 30:9 already proved that a divorced woman is NOT \"under a husband.\"** That's the whole point of that passage — her vows stand because she has NO husband to annul them. She is in the same category as a widow, whose husband is dead." },
      { type: "p", text: "So when you quote Romans 7:2 about divorced women, you are applying a passage about *hypandros* women (\"under-a-husband\" women) to women who are explicitly NOT *hypandros* according to Numbers 30:9. Torah already told us she's not under a husband. Paul is talking about women who ARE under a husband." },
      { type: "p", text: "You even acknowledge this distinction in your own teaching:" },
      { type: "quote", text: "Adultery always involves a married woman in some way.", source: "\"What is Adultery?\" video [00:05:35]" },
      { type: "p", text: "Exactly right! Adultery involves **a married woman** — an \"under-a-husband\" woman. So how can a DIVORCED woman commit adultery by remarrying? Numbers 30:9 proves she's NOT under a husband. She's not *hypandros*. You're applying passages about one category to a completely different category." },
      { type: "h2", text: "You Cannot Have It Both Ways" },
      { type: "p", text: "Your framework requires you to simultaneously claim:" },
      { type: "ul", items: [
        "She is **divorced** (so you can call her a \"divorced woman\")",
        "She is **still under a husband** (so Romans 7:2 applies to her)"
      ]},
      { type: "p", text: "But Numbers 30:9 already answered this. Torah explicitly places the divorced woman in the same category as the widow — a woman with NO husband over her. If she were still \"under a husband,\" he could annul her vows. But he cannot. Because she is not *hypandros*." },
      { type: "p", text: "If she is truly divorced (as Numbers 30:9 treats her):" },
      { type: "ul", items: [
        "She is NOT \"under a husband\" (*hypandros*) — Numbers 30:9",
        "She is NOT \"a married woman\" — Romans 7:2 doesn't apply",
        "She is NOT \"the wife of another man\" — Lev 20:10, Deut 22:22 don't apply",
        "The adultery definition does not apply to her remarriage"
      ]},
      { type: "p", text: "**You are quoting Romans 7:2 about \"under-a-husband women\" and applying it to women who Numbers 30:9 explicitly says are NOT under a husband. This is a category error. Torah already classified her. You're reclassifying her against Torah.**" }
    ],
    question: "Romans 7:2 describes \"a married woman\" — in Greek, *hypandros*, meaning \"under a husband.\" But Numbers 30:9 already proved that a divorced woman is NOT under a husband — her vows stand because no husband can annul them. How can you apply Romans 7:2 to divorced women when Torah explicitly classifies them as NOT being under a husband?"
  },
  {
    id: 10,
    part: 1,
    title: "The Rahab Problem",
    subtitle: "100 Pagan Unions Dissolve, But One Believer Union Is Permanent?",
    position: {
      text: "Rahab being a prostitute... she could have easily slept with men that were just passing through as well and created one flesh unions with them. But because she was a convert, then she had a new beginning...",
      source: "\"Divinity of Marriage\" video [01:06:14]"
    },
    content: [
      { type: "p", text: "You teach that Rahab—who may have had dozens or hundreds of one-flesh unions as a prostitute—had all of those unions dissolved when she converted. But you also teach that a believing woman who is divorced remains permanently one-flesh and can NEVER remarry." },
      { type: "p", text: "In a recent interview, you explained this clearly while discussing the Samaritan woman:" },
      { type: "quote", text: "So for this woman five husbands, there's no such thing as boyfriends... the man who enters you that's your husband, and so she's done this five times, she's had five husbands five men have entered her... [For unbelievers] a union can be made and it can be made repeatedly but each time it is a marriage.", source: "Interview with Pete Rambo (Dec 10, 2025) [~01:38:42-01:39:00]" },
      { type: "p", text: "You also explicitly stated that for converts like Rahab, former unions are dissolved:" },
      { type: "quote", text: "My case law example would be Rahab. Rahab had been a prostitute, she become one flesh with a bunch of men... she converts to the god of Israel... she then gets married to Salmon and becomes a great grandmother of Jesus... so law would be unbelieving unions not binding.", source: "Interview with Pete Rambo (Dec 10, 2025) [~01:36:47-01:37:00]" },
      { type: "p", text: "So your framework is crystal clear:" },
      { type: "ul", items: [
        "**Rahab (pagan prostitute, converts):** Potentially 100+ unions → YES, she can remarry (\"new beginning\")",
        "**Believing woman (wrongfully divorced):** ONE union → NO, bound until he dies"
      ]},
      { type: "p", text: "You defend Rahab's redemption passionately. In fact, when someone questioned whether former prostitutes could marry, you responded:" },
      { type: "quote", text: "Rahab was a redeemed whore and became a Grandmother of Jesus. Your rejection of their redemption is a rejection of the Gospel itself. You should be ashamed.", source: "Your Twitter/X post (Dec 4, 2025)" },
      { type: "p", text: "Beautiful words, Rich. I agree completely. So why don't you extend the same grace to divorced women? Why is Rahab's \"new beginning\" powerful enough to dissolve 100 unions, but a divorced believing woman — who was ALREADY a new creation when she married — is bound forever to a man who may have abandoned her?" },
      { type: "p", text: "You tell critics that rejecting Rahab's redemption is \"a rejection of the Gospel itself.\" But you reject the redemption of divorced women every day. Is that not also a rejection of the Gospel?" },
      { type: "h2", text: "The 1 Corinthians 7 Paradox — Conversion Dissolves Unions... Or Does It?" },
      { type: "p", text: "Rich, your Rahab position creates an impossible contradiction with Paul's instructions in 1 Corinthians 7." },
      { type: "scripture", ref: "1 Corinthians 7:13-14 ", text: "And if any woman has a husband who is an unbeliever, and he consents to live with her, **she should not divorce him**. For the unbelieving husband is made holy because of his wife..." },
      { type: "p", text: "Consider a pagan woman married to a pagan man. She converts. According to your Rahab principle:" },
      { type: "ul", items: [
        "She is now a \"new creation\"",
        "Her pre-conversion one-flesh union should be dissolved",
        "She should be FREE — just like Rahab"
      ]},
      { type: "p", text: "But Paul says the exact opposite: **don't divorce him.** Why would Paul need to say this if her conversion already dissolved the union?" },
      { type: "p", text: "**Your only options:**" },
      { type: "table", headers: ["If you say...", "Then..."], rows: [
        { cells: ["Conversion dissolves unions (Rahab)", "The converted woman ISN'T married to the unbeliever anymore. Paul's instruction makes no sense."], highlight: false },
        { cells: ["Conversion does NOT dissolve unions (1 Cor 7)", "Rahab's unions weren't dissolved either. She was one-flesh with 100 men when she married Salmon."], highlight: true }
      ]},
      { type: "p", text: "And there's a further problem: If conversion DOES dissolve the union, the converted woman should NOT rejoin her unbelieving husband — that would be yoking herself to an unbeliever! Yet Paul commands her to stay." },
      { type: "p", text: "Paul's instruction only makes sense if the marriage SURVIVED her conversion. Which means conversion does NOT dissolve one-flesh unions. Which means Rahab's weren't dissolved either." }
    ],
    question: "You passionately defend Rahab's redemption and ability to marry despite her past. Why don't divorced believing women receive the same grace? And if conversion gives Rahab a \"new beginning\" that dissolves her one-flesh unions, why does Paul tell the converted woman to remain with her unbelieving husband? Either conversion dissolves unions (and Paul's instruction is nonsensical), or it does not (and Rahab was still one-flesh with every man she had slept with). Which is it?"
  },
  {
    id: 11,
    part: 1,
    title: "Believer/Unbeliever One-Flesh",
    subtitle: "Your Framework Requires One-Flesh to Behave Differently Based on Belief",
    position: {
      text: "Divorced from unbelievers (1 Cor 7:15) means they're released from the one flesh bond. Divorced from a Believer? She remains one flesh until his death (1 Cor 7:10-11, Rom 7:2-3).",
      source: "Your Instagram post (Dec 11, 2025)"
    },
    content: [
      { type: "p", text: "Rich, you've now made your position explicit: divorce from an unbeliever releases, but divorce from a believer does not. In a recent interview, you stated this clearly:" },
      { type: "quote", text: "When an unbeliever leaves a believing woman she is lawfully available to remarry... [For unbelievers] a union can be made and it can be made repeatedly but each time it is a marriage.", source: "Interview with Pete Rambo (Dec 10, 2025) [~01:35:45, 01:38:36]" },
      { type: "p", text: "You also affirmed that Old Testament divorces of unbelieving spouses were valid:" },
      { type: "quote", text: "In Ezra and Nehemiah they had to divorce them it wasn't a lawful union.", source: "Interview with Pete Rambo (Dec 10, 2025) [~01:34:16]" },
      { type: "p", text: "But Rich, you also teach that one-flesh is a \"physical state.\" Physical states don't change based on religious belief. Yet your framework requires one-flesh to behave differently based on belief status:" },
      { type: "ul", items: [
        "**Between two believers:** Cannot be dissolved (only death)",
        "**With unbeliever who leaves:** CAN be dissolved (1 Cor 7:15)",
        "**Pagan unions before conversion:** CAN be dissolved (Rahab's \"new beginning\")"
      ]},
      { type: "p", text: "If one-flesh is truly physical, why does it behave differently based on belief? Physics doesn't care if you're a Christian." },
      { type: "p", text: "In another interview, you made this even more explicit — one-flesh is created even in unlawful unions:" },
      { type: "quote", text: "You become one flesh with a prostitute but it's unlawful. You become one flesh with an unbeliever or a foreigner in Israel's circumstances — that's unlawful. So there's unlawful marriages... but the one flesh union was created. In other words they had intercourse, they created an unlawful marriage union.", source: "BTM Podcast (~00:30:12-00:31:05)" },
      { type: "p", text: "Rich, you just admitted that one-flesh unions ARE created with unbelievers. You call them \"unlawful\" but acknowledge the union exists. Yet you also teach these unions CAN be dissolved — while believer unions cannot. **If one-flesh is physical and is created in both cases, why can one be dissolved and not the other?**" },
      { type: "h2", text: "The 1 Corinthians 7:10-11 Problem" },
      { type: "scripture", ref: "1 Corinthians 7:10-11 ", text: "But to the married I give instructions, not I, but the Lord, that the wife should not leave her husband (but if she does leave, **she must remain unmarried, or else be reconciled to her husband**), and that the husband should not divorce his wife." },
      { type: "p", text: "You quote this as a blanket prohibition on remarriage. But read it carefully. Paul addresses **a wife who LEFT her husband** — she initiated the separation. Her options: remain unmarried OR be reconciled. This makes sense — she left, so she should either return or stay single." },
      { type: "p", text: "This passage does NOT address:" },
      { type: "ul", items: [
        "A woman whose husband divorced HER (she didn't leave)",
        "A woman whose husband committed adultery (biblical grounds exist)",
        "A woman whose husband abandoned his obligations (Exodus 21:10-11)",
        "The lawful divorce provisions already in Torah (Deut 24:1-2)"
      ]},
      { type: "p", text: "You're taking Paul's instruction to a specific situation (wife who left) and applying it universally to all divorced women. That's not exegesis — it's eisegesis." },
      { type: "h2", text: "1 Corinthians 7:12-14" },
      { type: "p", text: "You categorize believer/unbeliever unions as \"UNLAWFUL\" (Marriage Law Worksheet). But Paul says if the unbeliever is content to stay, DON'T divorce — the unbelieving spouse is \"sanctified\" through the believer." },
      { type: "p", text: "If these unions are \"unlawful,\" why would Paul command believers to REMAIN in them and call the unbeliever \"sanctified\"?" },
      { type: "h2", text: "The 1 Timothy 5:8 \"Reclassification\" Problem" },
      { type: "p", text: "You've suggested an escape valve: if a \"believing\" husband fails to provide, he can be reclassified as an unbeliever via 1 Timothy 5:8, and then 1 Corinthians 7:15 applies:" },
      { type: "quote", text: "1 Timothy 5:8, for example, states that if a man does not provide for his household, he has denied the faith and is worse than an unbeliever. So, that's one example.", source: "\"Divinity of Marriage\" video [01:08:12]" },
      { type: "p", text: "Your Marriage Law Worksheet even lists this under \"Male unbeliever verification (1 Tim 5:8, 1 John 2:4, Ex 21:10-11).\"" },
      { type: "p", text: "But Rich, this creates a massive logical problem. You teach that:" },
      { type: "ol", items: [
        "One-flesh is established at intercourse — the moment of union",
        "One-flesh between two believers is PERMANENT until death",
        "The character of the union is fixed at formation"
      ]},
      { type: "p", text: "If both parties were believers at the time they became one-flesh, then the union was formed as a **believer-to-believer** union. You cannot retroactively change what kind of union it was." },
      { type: "p", text: "**Think about it:** If a man professes faith, marries a believing woman, they become one-flesh as two believers — and THEN he abandons his obligations years later — the union was still FORMED between two believers. His later behavior doesn't travel back in time and change what happened at the moment of union." },
      { type: "p", text: "Your options:" },
      { type: "ul", items: [
        "**If belief status at FORMATION matters:** The union was believer + believer. It should be permanent. His later \"reclassification\" is irrelevant — the union's character was already established.",
        "**If CURRENT belief status matters:** Then the \"permanent until death\" claim is false. One-flesh CAN be dissolved by changes in belief status. This undermines your entire framework."
      ]},
      { type: "p", text: "You can't have it both ways. Either the union's character is fixed at formation (and reclassification doesn't help), or it's fluid based on current status (and \"permanent\" is meaningless)." },
      { type: "p", text: "**This is the same problem as Rahab in reverse.** You say Rahab's pre-conversion unions were dissolved when she converted (changing TO believer). Now you're saying a believer union can be dissolved when he's reclassified (changing FROM believer). In both cases, you're allowing belief status changes to dissolve one-flesh — while simultaneously claiming believer-to-believer one-flesh is permanent. The inconsistency is glaring.**" }
    ],
    question: "You say one-flesh with a believer is permanent but one-flesh with an unbeliever can be dissolved. Where does Scripture teach that one-flesh operates differently based on belief status? If a man can be 'reclassified' as an unbeliever via 1 Timothy 5:8 and that dissolves the union — wasn't the union FORMED when both were believers? How does his later behavior change what kind of union was created at the moment they became one-flesh?"
  },
  {
    id: 12,
    part: 1,
    title: "Put Away vs Divorce",
    subtitle: "The Certificate Makes the Difference",
    position: {
      text: "The language of divorce and put away is interchangeable in the scriptures... Jesus uses them interchangeably.",
      source: "\"Divinity of Marriage\" video [01:02:50]"
    },
    scriptures: [
      {
        ref: "Deuteronomy 24:1 ",
        text: "When a man takes a wife and marries her, and it happens that she finds no favor in his eyes because he has found some indecency in her, and **he writes her a certificate of divorce** (סֵפֶר כְּרִיתֻת / βιβλίον ἀποστασίου) and puts it in her hand and **sends her out** (שִׁלְּחָהּ / ἐξαποστέλλω) from his house..."
      }
    ],
    content: [
      { type: "p", text: "Rich, you claim \"put away\" and \"divorce\" are interchangeable. But Torah — and the LXX Greek translation — shows they are TWO DISTINCT actions:" },
      { type: "ol", items: [
        "**The certificate** (Hebrew: סֵפֶר כְּרִיתֻת, sepher keritut; Greek: βιβλίον ἀποστασίου, biblion apostasiou) — the legal document",
        "**The sending away** (Hebrew: שָׁלַח, shalach; Greek: ἐξαποστέλλω, exapostellō) — the physical separation"
      ]},
      { type: "p", text: "Deuteronomy 24:1 requires BOTH: he writes the certificate AND sends her away. The certificate is given INTO HER HANDS — it's her proof of release. Only then can she \"go and become another man's wife\" (Deut 24:2)." },
      { type: "h2", text: "Can You Have One Without the Other?" },
      { type: "p", text: "Yes. You can \"send away\" (separate) without giving the certificate. This is exactly what God did with Judah versus Israel:" },
      { type: "scripture", ref: "Jeremiah 3:8 ", text: "And I saw that for all the adulteries of faithless Israel, **I had sent her away and given her a writ of divorce**, yet her treacherous sister Judah did not fear; but she went and was a harlot also." },
      { type: "scripture", ref: "Isaiah 50:1 ", text: "Thus says YHVH, '**Where is the certificate of divorce** by which I have sent your mother away?'" },
      { type: "p", text: "Look at the contrast — same Greek terminology in the LXX:" },
      { type: "ul", items: [
        "**Jeremiah 3:8 (Israel):** \"I had sent her away AND given her a writ of divorce\" — both actions done",
        "**Isaiah 50:1 (Judah):** \"Where IS the certificate?\" — rhetorical question implying NO certificate was given"
      ]},
      { type: "p", text: "God \"sent away\" both Israel and Judah (both were exiled). But only ISRAEL received the certificate. God Himself distinguishes between separation and formal divorce." },
      { type: "h2", text: "What This Means for Mark 10:12" },
      { type: "p", text: "In Mark 10:12, Jesus addresses a woman who \"divorces\" (ἀπολύω, apolyō — releases/sends away) her husband. But under Torah, a woman CANNOT write the certificate. Only the husband can. So what is Jesus addressing?" },
      { type: "p", text: "A woman who SEPARATES from her husband — walks out, leaves — without receiving the certificate that releases her. She then remarries and commits adultery. Why? Because separation without certificate does NOT release. She was never properly divorced." },
      { type: "h2", text: "The Certificate Accomplishes Something" },
      { type: "p", text: "If the certificate \"means nothing in the eyes of God\" as you claim, why does God distinguish between giving one (Israel) and not giving one (Judah)? Why does Jesus specifically address the woman who lacks proper divorce?" },
      { type: "p", text: "The certificate is what allows her to \"go and become another man's wife\" (Deut 24:2). Without it, she's still bound. With it, she's released." },
      { type: "h2", text: "This Destroys Your Entire Framework" },
      { type: "p", text: "Your entire argument depends on collapsing \"put away\" and \"divorce\" into one thing. If they're identical, then every New Testament divorce passage applies equally to everyone — certificate or not, grounds or not." },
      { type: "p", text: "But YHVH Himself made the distinction. He put away BOTH Israel and Judah (both were exiled). But He gave the certificate to Israel alone. **If the God of Israel distinguishes between separation and divorce, Jesus is not abolishing that distinction.**" },
      { type: "p", text: "This means when Jesus addresses \"putting away\" in the Gospels, we must ask: Is He addressing..." },
      { type: "ul", items: [
        "**Separation WITHOUT certificate** (like Judah) → Still bound → Remarriage = adultery",
        "**Proper divorce WITH certificate** (like Israel) → Released → Deut 24:2 still applies"
      ]},
      { type: "p", text: "Jesus is not abolishing Torah's divorce provision. He's condemning the Pharisees' practice of \"putting away\" wives without proper grounds or certificate — leaving them in limbo, technically still bound but cast out. THAT makes her commit adultery when she remarries, because she was never properly released." },
      { type: "p", text: "**A woman who receives a proper certificate of divorce for valid grounds IS released. Deuteronomy 24:2 still stands: she \"may go and become another man's wife.\" Your framework collapses the moment we recognize the distinction God Himself made.**" },
      { type: "h2", text: "Your Own Words Condemn Your Position" },
      { type: "quote", text: "Marriage law doesn't change. God's law regarding marriage doesn't change.", source: "\"David's Two Wives\" video [00:14:24]" },
      { type: "p", text: "I agree completely. Marriage law doesn't change. So let's look at what Torah says:" },
      { type: "scripture", ref: "Deuteronomy 24:1-2 ", text: "When a man takes a wife and marries her, and it happens that she finds no favor in his eyes... he writes her a certificate of divorce and puts it in her hand and sends her out from his house, and she leaves his house and **goes and becomes another man's wife**..." },
      { type: "p", text: "The passage describes her remarriage as a legitimate scenario — not a sin. It's assumed she will remarry, and the only prohibition that follows (v4) is against returning to her FIRST husband. Her remarriage itself is lawful." },
      { type: "p", text: "Now, if your interpretation of Jesus is correct — that no divorced woman can ever remarry without committing adultery — then Jesus CHANGED Deuteronomy 24. He took a passage that assumes lawful remarriage and made remarriage unlawful." },
      { type: "p", text: "But you say marriage law doesn't change. So which is it?" },
      { type: "ul", items: [
        "**Option 1:** Your interpretation of Jesus is correct → Jesus changed/abolished Deut 24 → Marriage law DID change → You contradict yourself",
        "**Option 2:** Marriage law doesn't change → Deut 24 still allows remarriage → Your interpretation of Jesus is wrong"
      ]},
      { type: "p", text: "The put away vs divorce distinction RESOLVES this contradiction. Jesus isn't changing Torah. He's addressing separation without certificate (like Judah) — which never properly released her. A woman with a proper certificate IS released, and Deuteronomy 24 still applies. Torah stands. Jesus and Moses agree." },
      { type: "p", text: "**Your interpretation forces Jesus to contradict Moses. The distinction we've shown allows them to harmonize. Which reading honors the unity of Scripture?**" }
    ],
    question: "If 'put away' and 'divorce' are interchangeable, why does God distinguish between them in Jeremiah 3:8 (Israel got both) and Isaiah 50:1 (Judah got no certificate)? Why does the LXX use separate terms for the certificate (βιβλίον ἀποστασίου) and the sending away (ἐξαποστέλλω)? And why would Jesus address a woman separating WITHOUT certificate (Mark 10:12) if the certificate accomplishes nothing?"
  },
  {
    id: 13,
    part: 1,
    title: "Where's the Mercy?",
    subtitle: "Even Your Allies See the Problem — And You Have No Answer",
    content: [
      { type: "p", text: "Rich, I want to close this section on divorce and remarriage with something that happened in your recent interview with Pete Rambo — a fellow polygyny advocate who shares much of your theology." },
      { type: "p", text: "Pete asked you directly about the pastoral implications of your framework. Here is his full question:" },
      { type: "quote", text: "What's the practical implication? Because there are a lot of divorced women out there that did it in ignorance... they were wrong, you know, now what? ... To understand where you're coming from, that leaves a whole lot of women uncovered and in limbo. And tough turkey, you know the truth now, you know, whatever. So where's the mercy, where's the grace? What's the proper application in this transition period?", source: "Pete Rambo, Interview with Rich Tidwell (Dec 10, 2025) [~01:31:54-01:32:20]" },
      { type: "p", text: "Pete was asking about divorced women in the church — what do they do now? You spent several minutes answering, and you DID provide answers — but only for certain categories of women:" },
      { type: "ul", items: [
        "**Women divorced for adultery:** \"Who wants to marry an adulteress?\" (implying they're unmarriageable anyway)",
        "**Women left by unbelievers:** Free to remarry under 1 Corinthians 7:15",
        "**Pre-conversion unions:** Dissolved at conversion (Rahab example)"
      ]},
      { type: "p", text: "But Rich, you conveniently left out the largest and most painful category in most church contexts: **the believing woman divorced BY a believing husband** — not for adultery, but because he dealt treacherously with her. The exact scenario Malachi 2 describes." },
      { type: "p", text: "For THAT woman, your only answer was 1 Corinthians 7:10-11: \"she should remain unmarried or else be reconciled to her husband.\"" },
      { type: "p", text: "In other words: **she's stuck.** Permanent celibacy until her ex-husband dies — potentially 40+ years." },
      { type: "h2", text: "The Binding Only Goes One Way" },
      { type: "p", text: "Rich, notice what's missing from your framework: If she is still \"bound\" to him as you claim, where is HIS obligation? Exodus 21:10-11 says if a man takes another wife, he must not diminish the first wife's food, clothing, or conjugal rights — **or she goes free.**" },
      { type: "p", text: "But in your framework:" },
      { type: "ul", items: [
        "**She** is permanently bound to him",
        "**He** has no continuing obligation to provide for her",
        "**He** can remarry (in your polygyny-affirming view)",
        "**She** cannot — she must \"remain unmarried or be reconciled\""
      ]},
      { type: "p", text: "You've created a one-way binding. She's stuck; he's free. That's not how Torah works." },
      { type: "h2", text: "The Church Makes It Even Worse" },
      { type: "p", text: "And here's where the mess becomes impossible: Most churches believe a man can only have one wife. So when the divorced husband remarries:" },
      { type: "ul", items: [
        "**Even if she wanted to reconcile** — the church would tell her no, because he's already remarried",
        "**He cannot provide conjugal rights** — he's married to someone else now, and the church says that's his only wife",
        "**Your own instruction becomes impossible** — \"remain unmarried OR be reconciled\" but reconciliation is blocked"
      ]},
      { type: "p", text: "So she's told to \"be reconciled\" to a man the church won't let her be reconciled to, or \"remain unmarried\" for potentially the rest of her life. **Your framework traps her in permanent limbo.**" },
      { type: "h2", text: "Your Other Categories Don't Help Either" },
      { type: "p", text: "And here's the thing, Rich: even those other categories you addressed — I've already demonstrated in this letter that your framework for them is logically incoherent:" },
      { type: "ul", items: [
        "**Rahab and pre-conversion unions:** If conversion dissolves one-flesh, why does Paul tell the converted woman NOT to divorce her unbelieving husband (1 Cor 7:13)? Your \"new beginning\" doctrine contradicts Paul's instruction. (See Section 10)",
        "**Women left by unbelievers:** You teach one-flesh is a \"physical state\" — but physical states don't change based on religious belief. Your framework requires one-flesh to behave differently for believers vs. unbelievers, which is logically impossible. (See Section 11)",
        "**The \"reclassification\" escape valve:** If a believing husband can be \"reclassified\" as an unbeliever via 1 Timothy 5:8, the union was still FORMED between two believers. His later behavior doesn't travel back in time to change what kind of union was created. (See Section 11)"
      ]},
      { type: "p", text: "So even your escape hatches have escape hatches that don't work." },
      { type: "h2", text: "The Bottom Line" },
      { type: "p", text: "Pete asked \"where's the mercy, where's the grace?\"" },
      { type: "p", text: "Your framework's answer for the faithful believing woman whose believing husband kicked her to the curb? **There is none.** No mercy. No grace. Just \"remain unmarried or be reconciled\" to the man who dealt treacherously with her — the very treachery Malachi 2 condemns." },
      { type: "p", text: "Rich, when even your allies are asking \"where's the mercy?\" — and you have no answer except permanent celibacy for the victim — something is deeply wrong with your framework." },
      { type: "p", text: "Torah provided mercy. Deuteronomy 24:1-2 gave the divorced woman permission to \"go and become another man's wife.\" Exodus 21:10-11 let the neglected wife \"go out free.\" Numbers 30:9 treated her as having no husband. **God's law protected these women. Your framework binds them.**" }
    ],
    question: "Pete Rambo asked you directly: 'Where's the mercy? Where's the grace?' For the believing woman divorced by a believing husband — not for adultery — what is your answer? You provided escape hatches for adulteresses, for women left by unbelievers, for converts — but for the faithful woman whose husband dealt treacherously with her, you offer only permanent celibacy. Is that mercy? Is that grace? Or is that punishing the victim?"
  },
  {
    id: 14,
    part: 1,
    title: "The Forced Celibacy Contradiction",
    subtitle: "You Condemn the Very Thing Your Framework Creates",
    content: [
      { type: "h2", text: "Let Me Be Clear About Who I'm Talking About" },
      { type: "p", text: "Rich, before I make this argument, I need to be absolutely clear: **I am NOT talking about women who treacherously divorced their believing husbands.** A woman doesn't have the right to simply divorce her husband for any reason she pleases and then remarry. I'm not excusing that, and I'm not arguing for their freedom to remarry." },
      { type: "p", text: "I AM talking about:" },
      { type: "ul", items: [
        "**Lawfully divorced women** — women whose husbands dealt treacherously with THEM (the Malachi 2 scenario), who were put away, whose husbands do not want them back, and who are not being provided for",
        "**Believers who divorced in ignorance** — women or men who didn't understand what they were doing at the time, whose ex-spouses have since remarried, and who couldn't even reconcile now if they wanted to because the church enforces monogamy",
        "**Women who remarried and are now widowed or divorced again** — women who cannot return to their first husband because Deuteronomy 24:4 forbids it as an abomination"
      ]},
      { type: "p", text: "These people represent a real and significant category. According to your framework, they are condemned to permanent celibacy with no path forward. That's who I'm asking about." },
      { type: "h2", text: "Your Own Argument Against Forced Celibacy" },
      { type: "p", text: "Rich, in a recent interview you made an extended argument against forced celibacy:" },
      { type: "quote", text: "I don't believe the Bible forces anyone into celibacy. I think when Jesus talks about celibacy in Matthew 19 he says 'to the one who can receive it' — like there are people called to it. It shouldn't be forced upon anybody.", source: "BTM Podcast (~00:58:04-00:58:16)" },
      { type: "quote", text: "I think that forced celibacy is not the answer. I think that it's actually unkind.", source: "BTM Podcast (~00:57:01-00:57:06)" },
      { type: "p", text: "You argued that prohibiting women from marriage has serious spiritual consequences:" },
      { type: "quote", text: "Women are literally prohibited from marriage and from childbearing and from fulfilling the divine mandate to procreate if we absolutely disallow and disavow polygamy.", source: "BTM Podcast (~00:56:15-00:56:24)" },
      { type: "p", text: "You even tied childbearing to women's sanctification:" },
      { type: "quote", text: "Paul states that childbearing for wives is part of their sanctification process... Yet women will be saved through childbearing if they continue in faith and love and holiness with self control.", source: "BTM Podcast (~00:55:51-00:56:11), referencing 1 Timothy 2:15" },
      { type: "h2", text: "By Your Own Criteria, Your Framework Fails" },
      { type: "p", text: "Rich, you say polygyny is the answer for the \"12 million women\" who cannot find husbands. But many of those 12 million ARE the lawfully divorced women and the believers who divorced in ignorance that I'm describing. Your framework excludes them from the very solution you're proposing." },
      { type: "p", text: "By your own criteria, your framework for these people is:" },
      { type: "ul", items: [
        "**Forcing celibacy** — They must \"remain unmarried or be reconciled\" for life, but reconciliation is impossible when the ex-spouse has remarried and the church won't allow it — or when Torah itself forbids returning to the first husband (Deut 24:4)",
        "**Prohibiting childbearing and violating the divine mandate** — By your interpretation, they cannot fulfill \"be fruitful and multiply\"",
        "**Interfering with sanctification** — By your interpretation of 1 Timothy 2:15, childbearing is \"part of their sanctification process\"",
        "**Being \"unkind\"** — Your own word for forced celibacy"
      ]},
      { type: "p", text: "**You condemn forced celibacy as unbiblical and unkind — then force it on these people through your framework.**" },
      { type: "h2", text: "The Reclassification Sophistry" },
      { type: "p", text: "Rich, I know you have an attempted escape valve: the 1 Timothy 5:8 \"reclassification.\" You've argued that if a believing husband fails to provide, he can be reclassified as an unbeliever (\"worse than an unbeliever\"), and then 1 Corinthians 7:15 applies — the woman is \"not bound.\"" },
      { type: "p", text: "But your position is that one-flesh between believers cannot be dissolved by anything except death. So when Torah says in Exodus 21:10-11 that she \"shall go out free\" if he fails to provide — you say that doesn't dissolve the one-flesh bond for believers." },
      { type: "p", text: "Yet you turn around and say: \"If he fails to provide, we can reclassify him as an unbeliever via 1 Timothy 5:8, and THEN she's free.\"" },
      { type: "p", text: "Do you see the problem?" },
      { type: "ul", items: [
        "**Your claim:** One-flesh between believers cannot be dissolved (except by death)",
        "**Your claim:** Divorce doesn't dissolve believer marriages",
        "**Your claim:** If he fails to provide, he can be \"reclassified\" as an unbeliever",
        "**Your claim:** Once reclassified, 1 Corinthians 7:15 applies and she's free"
      ]},
      { type: "p", text: "But wait — this is even more absurd than it first appears. You teach that believer/unbeliever unions are \"unlawful\" (though one-flesh is still created):" },
      { type: "quote", text: "Unlawful unions would be a believer and unbeliever. If you don't know this, you need to get familiar with this... It's not blessed by God. It's not a lawful union.", source: "Divinity of Marriage presentation (~01:16:01-01:16:48)" },
      { type: "p", text: "But if that's true, **Paul could not advise believers to stay married to their unbelieving spouses** (1 Cor 7:12-14). If such unions were truly unlawful, Paul would have to tell converts to divorce their unbelieving spouses — they couldn't remain in an unlawful union." },
      { type: "p", text: "So which is it? If believer/unbeliever marriages are unlawful, Paul's advice is wrong. If Paul's advice is right, then simply \"reclassifying\" someone as an unbeliever doesn't make the marriage unlawful or dissolvable. **Your reclassification trick doesn't even work on its own terms.**" },
      { type: "p", text: "And even if we set that aside: If failure to provide triggers reclassification, and reclassification allows freedom... then **failure to provide DOES dissolve believer marriages** — you've just added extra steps to get there. Why not simply accept what Torah plainly says? Exodus 21:10-11: if he doesn't provide food, clothing, or conjugal rights — **she goes out free.** Deuteronomy 24:1-2: if she has a writ of divorce — **she may remarry.**" },
      { type: "p", text: "But here's the deeper problem: **this reclassification doesn't help the people I'm describing anyway.** The woman whose husband dealt treacherously with her and divorced her — he's already gone. He's not \"failing to provide\" in an ongoing marriage; he already PUT HER AWAY. Your reclassification trick requires an ongoing marriage. These people don't have ongoing marriages — they have certificates of divorce and ex-spouses who remarried." },
      { type: "p", text: "So even your workaround doesn't provide an answer. They're still stuck." },
      { type: "p", text: "And I find it curious, Rich: **I never hear you talk about forcing the man who is supposedly still bound to her to give her her conjugal rights, food, and clothing.** If he's still one-flesh with her — if the bond isn't dissolved — then his obligations under Exodus 21:10 continue. Where is your teaching on holding these men accountable? Where is your demand that they provide for the women they put away?" },
      { type: "h2", text: "The Deuteronomy 24:4 Problem" },
      { type: "p", text: "There's yet another category your framework cannot handle: the woman who was legitimately divorced, remarried, and is now either widowed or divorced again." },
      { type: "p", text: "Consider this scenario: A woman is lawfully divorced by her first husband (he dealt treacherously with her). She later marries a second believing husband. Then that second husband dies — or he also divorces her." },
      { type: "p", text: "Your answer for divorced women is \"remain unmarried or be reconciled\" (1 Cor 7:10-11). But reconciled to whom? Her first husband? **Torah explicitly forbids this:**" },
      { type: "scripture", ref: "Deuteronomy 24:4", text: "Her former husband who sent her away is not allowed to take her again to be his wife, since she has been defiled; for that is an abomination before the LORD." },
      { type: "p", text: "So \"be reconciled\" to the first husband is not just impossible — it's an **abomination**. Torah forbids it. That option is permanently off the table." },
      { type: "p", text: "What about the second husband?" },
      { type: "ul", items: [
        "**If he died:** You would say she's NOT a widow — she was committing adultery with him, so his death doesn't free her.",
        "**If he divorced her:** By your framework, she's supposedly still \"one-flesh\" with him AND still \"one-flesh\" with her first husband (since you claim believer divorce doesn't dissolve one-flesh). So she's bound to TWO men simultaneously?"
      ]},
      { type: "p", text: "On the first point, here's what you've taught:" },
      { type: "quote", text: "Jesus taught and we affirm that if any man marries a divorced woman, he commits adultery with her... because she remains one flesh with her believing spouse until he dies.", source: "\"David's Two Wives\" (~00:04:38-00:05:16)" },
      { type: "p", text: "By your framework, she's still bound to her first husband — whom she cannot return to (Deut 24:4). **She's trapped.**" },
      { type: "p", text: "And here's the real bind: Even if she WANTED to reconcile with her first husband — even if HE wanted her back — **Torah says no.** It's an abomination. So your instruction to \"be reconciled\" is impossible for this woman. The only option left is \"remain unmarried\" — permanent celibacy for a woman who was lawfully divorced and holds a writ of divorce." },
      { type: "p", text: "Rich, Torah itself removes the \"be reconciled\" option for this category of women. Your framework has no answer for them except forced celibacy — the very thing you call \"unkind.\"" },
      { type: "h2", text: "Torah Is Simple. Your Framework Is a Mess." },
      { type: "p", text: "Rich, look at the tangled mess your framework creates: reclassification workarounds, permanent one-flesh bonds that somehow don't require provision, women bound to two men simultaneously, reconciliation that's both required AND forbidden. It's a theological Gordian knot." },
      { type: "p", text: "But Torah is simple: **If you have a writ of divorce, you can remarry. You just can't return to the first husband.** That's it. That's the whole rule. Deuteronomy 24:1-4 isn't complicated — it's straightforward." },
      { type: "scripture", ref: "Deuteronomy 30:11-14", text: "For this commandment which I command you today is not too difficult for you, nor is it out of reach. It is not in heaven, that you should say, 'Who will go up to heaven for us to get it for us and make us hear it, that we may observe it?' Nor is it beyond the sea... But the word is very near you, in your mouth and in your heart, that you may observe it." },
      { type: "p", text: "God said His commandments are **not too difficult**. They're near us. They're observable. So why does your framework require flow charts, reclassification workarounds, and theological gymnastics to navigate?" },
      { type: "p", text: "Rich, do you remember why Jesus had to confront so much hypocrisy in His day? It was because the scribes and Pharisees had buried God's simple, observable commandments under layers of extra-biblical tradition and complication. They had made the law a burden instead of a blessing. Jesus rebuked them: \"You tie up heavy burdens and lay them on men's shoulders\" (Matt 23:4)." },
      { type: "p", text: "I say this as a brother: **That is what your framework does.** It takes Torah's clear provision — a writ of divorce allows remarriage — and buries it under complications that trap people in impossible situations. The prostitute finds freedom. The believing sister finds a life sentence." },
      { type: "p", text: "Why are we adding all of this complication instead of just doing what Torah plainly says? Why create a framework that traps people in impossible situations when God's Law provides a clear path forward?" },
      { type: "p", text: "And Rich, answer me this: **Why is there redemption, and marriage, and procreation, and fruitfulness available to the prostitute who slept with 500 men — but not to one of your believing sisters who finds herself in this situation?**" },
      { type: "p", text: "I'm not talking about a recalcitrant, unrepentant woman who treacherously divorced her husband and refuses to acknowledge any wrongdoing. I'm talking about women in these categories — women who either through no fault of their own OR through their own sin (which they've repented of) — find themselves trapped in an impossible situation according to your framework. Rahab gets a husband, children, and a place in the lineage of Messiah. But your believing sister who was put away, or who divorced in ignorance and repented? Permanent celibacy. How is that consistent?" },
      { type: "p", text: "Rich, respectfully: **Your second wife got a second chance.** She came to Christ, married you, and God has blessed you with a beautiful child together. Praise God for that — I mean it sincerely. But under your framework, you are denying that same second chance to sisters in Christ who find themselves in these impossible situations. Why does Kristan get redemption, marriage, and fruitfulness, but the believing woman who was put away by a treacherous husband does not? **And as I've shown, you cannot logically say they can** — your framework doesn't allow for it, even though you think it does." },
      { type: "h2", text: "You Cannot Have It Both Ways" },
      { type: "p", text: "Either forced celibacy is acceptable — in which case, why use it as an argument FOR polygyny? Or forced celibacy is \"unkind\" and unbiblical — in which case, your framework for these divorced believers is unkind and unbiblical." },
      { type: "p", text: "You said it yourself: \"It shouldn't be forced upon anybody.\" **Your own words condemn your own framework.**" }
    ],
    question: "You said: 'I don't believe the Bible forces anyone into celibacy. It shouldn't be forced upon anybody.' You called forced celibacy 'unkind.' Yet for the woman whose husband dealt treacherously with her — or for the believer who divorced in ignorance and whose ex-spouse has remarried — or for the woman who remarried and is now widowed or divorced again (and cannot return to her first husband per Deuteronomy 24:4) — your framework offers only permanent celibacy. By your own criteria, isn't that 'unkind'?"
  },
  {
    id: 15,
    part: 2,
    title: "Torah Calls Her WIFE",
    subtitle: "Your Definitions Make Scripture Impossible to Enforce",
    position: {
      text: "She's betrothed—pledged to a man for marriage at a later date—in her youth, yes. Nevertheless, she's not sexually active as she's not a wife but a virgin, and is still in her father's house until she is of age...",
      source: "Your Twitter/X post (Dec 10, 2025)"
    },
    scriptures: [
      {
        ref: "Deuteronomy 22:23-24 ",
        text: "If there is a girl who is a virgin engaged to a man, and another man finds her in the city and lies with her, then you shall bring them both out... and you shall stone them to death; the girl, because she did not cry out in the city, and the man, because he has violated his neighbor's **wife**."
      }
    ],
    content: [
      { type: "p", text: "Rich, you've clarified your position: a betrothed young woman is \"not a wife but a virgin\" until she reaches \"age\" (20). But look at what Torah actually says." },
      { type: "h2", text: "Torah Calls Her a WIFE" },
      { type: "p", text: "Look at Deuteronomy 22:24. The na'ara who is betrothed is called his **\"WIFE\"** (אִשְׁתּוֹ, ishto). Not \"future wife.\" Not \"pledged woman.\" WIFE. And she is held accountable with the death penalty for adultery." },
      { type: "p", text: "You say she's \"not a wife but a virgin.\" Torah says she IS a wife. **Who is correct — you or Moses?**" },
      { type: "h2", text: "The Septuagint Confirms This" },
      { type: "p", text: "The Septuagint (LXX) — the Greek translation that Jesus and the apostles quoted — translates Deuteronomy 22:24 with remarkable clarity:" },
      { type: "scripture", ref: "Deuteronomy 22:24 (LXX)", text: "...καὶ τὸν ἄνθρωπον, ὅτι ἐταπείνωσε **τὴν γυναῖκα τοῦ πλησίον** — \"...and the man, because he humbled **the wife of his neighbor**.\"" },
      { type: "p", text: "The LXX uses **γυναῖκα** (gynaika) — the accusative form of γυνή (gynē), which is THE standard Greek word for \"wife.\" This is the same word used throughout the New Testament for married women (Matt 1:20, 24; 1 Cor 7:2-4; Eph 5:22-25)." },
      { type: "p", text: "And notice: this betrothed young woman is called a νεᾶνις (neanis - \"young woman\") in verse 21, yet ALSO called γυναῖκα (gynē - \"wife\") in verse 24. **The LXX confirms what the Hebrew says: a young betrothed woman IS a wife.**" },
      { type: "h2", text: "The Logical Impossibility" },
      { type: "p", text: "Your framework creates an impossible situation:" },
      { type: "ul", items: [
        "You teach: She's not an ishshah (wife) until 20",
        "You teach: Sex = marriage",
        "Therefore: Sex with her before 20 doesn't make her a wife",
        "If she's not a wife, she CANNOT commit adultery (adultery requires a married woman)",
        "But Deuteronomy 22 charges her with adultery and prescribes death"
      ]},
      { type: "p", text: "**Your definitions make the passage impossible to understand AND impossible to enforce.** If she's not a wife, how can she commit adultery? If she can commit adultery, she must be a wife. You cannot have it both ways." },
      { type: "p", text: "This isn't a minor problem. This is Torah directly contradicting your framework." }
    ],
    question: "Deuteronomy 22:24 calls the betrothed na'ara his 'WIFE' (אִשְׁתּוֹ) and charges her with adultery. You say she's 'not a wife but a virgin' until 20. If she's not a wife, how can she commit adultery? Torah says she IS a wife. Who is correct — you or Moses?"
  },
  {
    id: 16,
    part: 2,
    title: "Your Definitions Contradict Torah",
    subtitle: "Numbers 30 and Malachi 2 Both Destroy Your Framework",
    content: [
      { type: "h2", text: "Numbers 30: Vow Accountability in Youth" },
      { type: "p", text: "You define ne'urim as \"youth\" (under 20, not yet accountable). But look at what Numbers 30 actually says:" },
      { type: "scripture", ref: "Numbers 30:3-5, 16 ", text: "If a woman makes a vow to YHVH, and binds herself by an obligation in her father's house **in her youth** (בִּנְעֻרֶיהָ, bine'ureha)... and her father hears her vow... if her father says nothing to her, then all her vows shall stand... These are the statutes which YHVH commanded Moses, concerning the relationship of a husband to his wife, and of a father to his daughter **in her youth** (בִּנְעֻרֶיהָ) in her father's house." },
      { type: "p", text: "The Septuagint (LXX) translates this as **ἐν τῇ νεότητι αὐτῆς** (en tē neotēti autēs) — \"in her youth.\" The Greek νεότης (neotēs) is the same root used in Malachi 2:14 for \"wife of your youth.\"" },
      { type: "p", text: "If covenant accountability only begins at 20+, how can a ne'urim girl already be **covenant-responsible for vows to God** unless her father annuls them? Her vows to YHVH are binding. That's covenant accountability. In her youth." },
      { type: "p", text: "You cannot claim ne'urim means \"not yet covenant-accountable\" when Torah explicitly holds ne'urim women covenant-accountable for their vows." },
      { type: "h2", text: "Malachi 2:14: \"The Wife of Your Youth\"" },
      { type: "scripture", ref: "Malachi 2:14-15 ", text: "...YHVH has been a witness between you and **the wife of your youth** (אֵשֶׁת נְעוּרֶיךָ, eshet ne'urekha), against whom you have dealt treacherously, though she is your companion and **your wife by covenant**." },
      { type: "p", text: "The LXX translates this as **γυναῖκα νεότητός σου** (gynaika neotētos sou) — \"wife of your youth.\" Notice: she is called γυναῖκα (gynē - wife), not \"future wife\" or \"pledged woman.\" And her youth (νεότητος) is not a disqualifier — it's simply a descriptor of WHEN they married." },
      { type: "p", text: "Look at the Hebrew: אֵשֶׁת נְעוּרֶיךָ — \"wife of your youth.\" The word for \"youth\" here is from the SAME ROOT as ne'urim. God Himself calls a woman married in her ne'urim (youth) a **\"wife by covenant.\"**" },
      { type: "p", text: "You insist a woman in her ne'urim cannot be lawfully married. God says she is \"your wife by covenant.\" **Who is adding to Torah here — God or you?**" },
      { type: "h2", text: "Your Framework Collapses" },
      { type: "p", text: "You've painted yourself into a corner:" },
      { type: "ul", items: [
        "If ne'urim women aren't covenant-accountable → Their vows shouldn't bind them (but Num 30 says they do)",
        "If ne'urim women can't be wives → They can't commit adultery (but Deut 22 says they can)",
        "If ne'urim women can't marry → There's no \"wife of your youth\" (but God says there is)",
        "If sex = marriage but ne'urim women can't marry → Sex with them creates... what exactly?"
      ]},
      { type: "p", text: "**Your age 20 requirement doesn't come from Torah. It contradicts Torah at every turn.**" }
    ],
    question: "Numbers 30 holds ne'urim women accountable for vows to God. Malachi 2:14 calls a woman married in her youth 'your wife by covenant.' How can ne'urim women be covenant-accountable but not marriage-accountable? God calls her 'wife by covenant' — why do you say she cannot be?"
  },
  {
    id: 17,
    part: 2,
    title: "Your Own Argument Condemns You",
    subtitle: "The Silence That Defends Polygyny Also Destroys Your Age 20 Requirement",
    content: [
      { type: "p", text: "Rich, you regularly argue that the silence of Scripture proves polygyny is lawful. You've said:" },
      { type: "quote", text: "You have to remember friends that in the first century plural marriage supernormal among the Jews.", source: "\"David's Two Wives\" video [00:27:28]" },
      { type: "quote", text: "In fact, the silence of the New Testament indicates that there's no prohibition in the New Testament either because there would have been converts in the first century who had more than one wife. Very common at that time. So why isn't there a protocol in the New Testament that denies... them those additional unions...", source: "\"Forbidden Marriages\" video [00:07:45]" },
      { type: "p", text: "Your argument: Polygyny was widespread among Jews. Torah permits it. Jesus and the apostles said nothing against it. Therefore it remains lawful." },
      { type: "p", text: "**Now apply that same logic to marriage age.**" },
      { type: "h2", text: "The Historical Record of Jewish Practice" },
      { type: "p", text: "Scholarly sources confirm that Jewish girls in the Second Temple period were typically betrothed in their early to mid-teens — this was standard practice, not exceptional:" },
      { type: "ul", items: [
        "**Adiel Schremer** (*Male and Female He Created Them*, Zalman Shazar Center, 2003): \"Girls were married sometime after reaching sexual maturity (around twelve or thirteen), perhaps up until their late teens\" in Palestine. ([source](https://muse.jhu.edu/article/217015/summary))",
        "**Jewish Encyclopedia** (1906), \"Marriage Laws\": \"A daughter who was a minor could be given in marriage by her father; and such a marriage was valid.\" Puberty was defined as 12 for females. ([source](https://www.jewishencyclopedia.com/articles/10435-marriage-laws))"
      ]},
      { type: "p", text: "Betrothing women in their teens wasn't a fringe practice — it was **even MORE widespread than polygyny**. If this practice were sinful, if it made men perverts and pedophiles as your framework implies, **where is the rebuke?**" },
      { type: "h2", text: "Roman Law Makes This Even Worse for You" },
      { type: "p", text: "Here's what makes your position completely untenable. Consider what Roman law — the civil law governing Judea at the time of Christ — said about these two issues:" },
      { type: "ul", items: [
        "**Polygyny:** PROHIBITED under Roman law. Only one legal wife permitted.",
        "**Marriage age:** PERMITTED at 12 for girls, 14 for boys. An 18-19 year old was a full legal adult."
      ]},
      { type: "p", text: "These aren't obscure claims. The scholarly sources are clear:" },
      { type: "ul", items: [
        "**Society for Classical Studies**: \"Roman legal sources strongly indicate that women could not marry before age 12... Most Roman women appear to have married later, from about 15 to 20.\"",
        "**Keith Hopkins** (*Population Studies*, 1965): \"For Roman girls the legal minimum age at marriage was 12.\"",
        "**World History Encyclopedia**: \"Roman minimum age for marriage for girls was 12 years... it was fourteen years for males.\"",
        "**Wikipedia (Marriage in ancient Rome)**: \"The institution of marriage in ancient Rome was a strictly marital monogamy: under Roman law, a Roman citizen, whether male or female, could have only one spouse in marriage at a time.\""
      ]},
      { type: "p", text: "Now look at the situation Jesus and the apostles faced:" },
      { type: "ul", items: [
        "**Polygyny:** Prohibited by Roman law, but permitted by Torah. Jesus said NOTHING against it. You argue this silence proves we follow Torah over Roman law.",
        "**Teen marriage:** Permitted by Roman law (12+). Torah specifies no age. Jewish practice was to marry in teens. Jesus said NOTHING against this widespread practice. But you claim it was sinful? And for the sake of argument, let's say Torah DOES require age 20 as you claim — then an entire nation was violating God's command, and Jesus said NOTHING to correct it? He corrected handwashing, Corban, Sabbath traditions, and divorce — but not widespread 'child marriage'? The silence destroys your position either way."
      ]},
      { type: "h2", text: "The Devastating Inconsistency" },
      { type: "p", text: "Rich, your methodology is hopelessly inconsistent:" },
      { type: "ul", items: [
        "Where Roman law and Torah **DISAGREED** (polygyny) → You follow silence to Torah ✓",
        "Where Roman law **PERMITTED** something and Torah **WAS SILENT** (marriage age) → You reject BOTH Roman law AND Jewish practice to invent 'age 20' ✗"
      ]},
      { type: "p", text: "On polygyny, you say: \"Roman law prohibited it, but Torah permits it, and Jesus said nothing — so we follow Torah.\"" },
      { type: "p", text: "On marriage age: Torah specifies no minimum age. Jewish practice was to marry in the teens. Roman law permitted marriage at 12. Jesus said nothing. The apostles said nothing. **And yet you reject the unanimous witness of Torah's silence, Jewish practice, Roman law, AND apostolic silence to invent a standard that appears nowhere?**" },
      { type: "p", text: "**You cannot use the argument from silence to defend polygyny and then reject it when the same logic — applied to an even MORE universally accepted practice — destroys your age 20 requirement.**" },
      { type: "h2", text: "A Note on Civil Law Today" },
      { type: "p", text: "To be absolutely clear: I am NOT advocating for marriage to anyone under the legal age in any jurisdiction today. I affirm Romans 13:1-7 and the importance of obeying civil law. This argument is about **historical practice at the time of Christ** and the glaring inconsistency in your methodology." },
      { type: "p", text: "If Jesus's silence on polygyny (which contradicted Roman law but aligned with Torah) proves its acceptability, then His silence on marriage before 20 (which aligned with BOTH Torah's silence AND Roman law AND universal Jewish practice) proves it even more strongly. Your 'age 20' standard is foreign to Torah, Jewish practice, and Roman law alike." },
      { type: "p", text: "**And consider the impossible situation your framework creates today:** A man lawfully married to an 18 or 19 year old woman under civil law — you claim he's a pedophile violating Torah and living in deep sin. Yet you offer absolutely NO Torah recourse or instructions on how to remedy it. Is he supposed to divorce her? Where does Torah command that? Is he supposed to wait until she turns 20 and then they're suddenly married? Where does Torah say that? You've created a 'sin' with no scriptural solution — because it isn't a sin at all." }
    ],
    question: "You argue that Jesus's silence on polygyny — a practice ILLEGAL under Roman law but permitted by Torah — proves it remains lawful. But on marriage age, Torah specifies nothing, Jewish practice was to marry in the teens, and Roman law permitted marriage at 12. Jesus was equally silent. How can silence prove polygyny acceptable while the same silence condemns marriage before 20? Where does your 'age 20' standard come from if not Torah, Jewish practice, OR Roman law?"
  },
  {
    id: 18,
    part: 2,
    title: "The Linguistic Argument Fails",
    subtitle: "Your ʾîš/ʾiššâ Argument Contradicts Your Own Definitions",
    position: {
      text: "20-years-old is repeatedly established as the age of adulthood (Num 14:29, 32:11, 1:3, 26:4, Ex 30:14, 1 Chron 23:24). If a male is 20 or up, the term ʾîš is employed for 'man.' The female gender has the equivalent term ʾiššâ for an adult 'woman.' The Law of Marriage (Gen 2:23-24) employs the terms for an adult Man and adult Woman.",
      source: "Your Instagram post (Dec 10, 2025)"
    },
    content: [
      { type: "p", text: "Rich, your argument is that ʾîš and ʾiššâ mean adults (20+), and since Genesis 2:23-24 uses these terms, marriage requires age 20. Let's test this." },
      { type: "h2", text: "Deuteronomy 22:24 Destroys Your Argument" },
      { type: "p", text: "You claim ʾiššâ strictly means a woman 20+. But look at Deuteronomy 22:24:" },
      { type: "scripture", ref: "Deuteronomy 22:24 ", text: "...the man, because he has violated his neighbor's **wife** (אֵשֶׁת, eshet — from ʾiššâ)." },
      { type: "p", text: "The betrothed na'ara is called his \"wife\" using the ʾiššâ root. But YOU say na'ara means \"young woman\" (under 20). So which is it?" },
      { type: "ul", items: [
        "**If ʾiššâ strictly means 20+:** Then the na'ara in Deut 22:24 must be 20+. But you say na'ara is under 20.",
        "**If na'ara is under 20:** Then ʾiššâ does NOT strictly mean 20+. Your linguistic argument collapses."
      ]},
      { type: "p", text: "**You cannot have it both ways.** Either the na'ara is over 20 (contradicting your definition), or ʾiššâ can apply to women under 20 (destroying your argument)." },
      { type: "h2", text: "You Reversed the Burden of Proof" },
      { type: "p", text: "You ask critics to \"provide Scriptural proof the age of adulthood is not 20 years old.\" But where does Torah say marriage requires age 20? The verses you cite (Num 14:29, 32:11, 1:3, 26:4, Ex 30:14, 1 Chron 23:24) establish age 20 for:" },
      { type: "ul", items: [
        "Military service census",
        "Temple tax",
        "Levitical service"
      ]},
      { type: "p", text: "**None of these are marriage.** You're taking a requirement for military conscription and applying it to marriage without any textual warrant. Torah explicitly gives ages when they matter (priests at 25/30, military at 20). Where is the explicit age for marriage? It doesn't exist." },
      { type: "h2", text: "Father's Authority Asymmetry" },
      { type: "p", text: "You rightly affirm that Torah grants fathers authority over their daughters' marriages. But your age 20 requirement creates a strange asymmetry:" },
      { type: "ul", items: [
        "**Father says NO (annuls union):** Valid per Torah, valid per your framework",
        "**Father says YES (approves marriage at 18-19):** Valid per Torah, NOT valid per your framework"
      ]},
      { type: "p", text: "Where in Torah is this asymmetry? If the father's authority comes from God, why does your extra-biblical age requirement override the father's YES but not his NO?" },
      { type: "p", text: "**Torah's ACTUAL protection is the father's authority.** By nullifying the father's ability to approve before age 20, you're removing the protection God designed and substituting your own." }
    ],
    question: "You say ʾiššâ means a woman 20+. But Deuteronomy 22:24 calls the na'ara (whom you define as under 20) his 'wife' (אֵשֶׁת, from ʾiššâ). How can both be true? Either the na'ara is 20+ (contradicting your definition) or ʾiššâ doesn't require age 20 (destroying your argument). Which is it?"
  },
  {
    id: 19,
    part: 2,
    title: "The Missing Command",
    subtitle: "God Didn't Say It — In Torah OR Through Christ",
    content: [
      { type: "p", text: "God gave us explicit instructions on what to do with a bird's nest if we pass it and want to take the young or the eggs (Deut 22:6-7). But you think He was asleep at the wheel on marriage? He wanted us to read between the lines, stringing together census laws for males to create a female marriage age He never stated?" },
      { type: "p", text: "**\"A virgin shall not be married until age 20.\"** How difficult would that have been to write? It's not there. Because God didn't say it." },
      { type: "p", text: "And worse — God didn't CORRECT the historical practice at any point. Christ corrected the Pharisees on many things. The apostles gave instructions on marriage, divorce, and sexual ethics. If an entire nation was betrothing and marrying virgins under 20 in violation of God's standard, wouldn't SOMEONE have said something?" },
      { type: "p", text: "**The silence in Torah AND the silence in the New Testament both testify against you.**" },
      { type: "h2", text: "You're Doing What You Condemn" },
      { type: "p", text: "You don't accept the enforced-monogamy crowd adding \"one wife\" to God's Word. Neither do I. You rightly point out that they're binding where Torah hasn't bound." },
      { type: "p", text: "But you're doing the exact same thing here with \"age 20.\" You're adding a requirement that Torah never gives, and then condemning those who don't follow YOUR addition as perverts and pedophiles." },
      { type: "p", text: "**If adding 'one wife' to Torah is wrong, adding 'age 20' to Torah is equally wrong.**" }
    ],
    question: "Where in Torah does it say 'A virgin shall not be married until age 20'? If this were God's standard, why didn't He state it explicitly — as He did for military service, temple tax, and Levitical duty? And why didn't Christ or the apostles correct the widespread practice of marrying women in their teens?"
  },
  {
    id: 20,
    part: 2,
    title: "A Question About Mary",
    subtitle: "Your Census Argument Fails, and Your Framework Indicts Joseph and God",
    content: [
      { type: "p", text: "Rich, you've publicly argued that Mary must have been at least 20 years old because she participated in the Roman census with Joseph. You've stated:" },
      { type: "quote", text: "Twenty is likewise the age for all adult services such as giving offerings (Ex 30:14), serving in the army (Num 1:3), being counted in a census (Num 26:4), serving in the Temple (1 Chron 23:24). Even the Virgin Mary was at least 20 years old as her and Joseph participated in the census (Luke 2:3-5).", source: "Your Twitter/X post (Dec 6, 2025)" },
      { type: "p", text: "This argument fails on multiple levels:" },
      { type: "h2", text: "Problem 1: This Was a ROMAN Census, Not an Israelite Census" },
      { type: "p", text: "The census in Luke 2 was ordered by Caesar Augustus — it was a Roman administrative census for taxation purposes, not an Israelite religious census. Numbers 26:4 refers to a specific Israelite census for military and inheritance purposes among those who came out of Egypt. Rome didn't follow Torah age requirements. They had their own rules." },
      { type: "p", text: "You're conflating two completely different types of censuses from two completely different governing authorities with two completely different purposes." },
      { type: "h2", text: "Problem 2: Roman Censuses Counted Entire Households — Including Children" },
      { type: "p", text: "Scholarly evidence demonstrates that Roman provincial censuses counted entire households regardless of age:" },
      { type: "ul", items: [
        "**Grammateus Project** (University of Geneva papyrology): \"The declarant was usually the male head of the household, but **women and children were included**, along with their property.\" ([source](https://grammateus.unige.ch/descriptions/decl_census))",
        "**HistoriaRomana**: \"The head of each household, the *paterfamilias*, was **responsible for declaring information on behalf of his wife, children, and slaves**.\" ([source](https://historiaromana.veertualia.com/counting-the-empire-the-roman-census-in-the-1st-century-ad/))"
      ]},
      { type: "p", text: "The evidence is clear: Roman provincial censuses were household registrations that counted everyone — men, women, children, even slaves. The 20-year-old requirement in Numbers 26:4 was for a specific Israelite military census, not a universal age for any census." },
      { type: "p", text: "In fact, Luke 2:5 specifically mentions that Mary was \"with child\" — the unborn Jesus was relevant to the registration! If only those 20+ were counted, why mention her pregnancy at all?" },
      { type: "h2", text: "The Irony: You're Using Roman Law to Prove Torah — But Roman Law Destroys Your Position" },
      { type: "p", text: "Rich, think about what you're doing. You're trying to apply YOUR Torah-based extrapolation (20 years old = adult, therefore minimum marriage age) to a ROMAN census, to then prove Mary was over 20. But you're appealing to the wrong legal system — and that legal system destroys your argument:" },
      { type: "p", text: "**Society for Classical Studies**: \"Roman legal sources strongly indicate that women could not marry before age 12.\" ([source](https://www.classicalstudies.org/roman-law-and-marriage-underage-girls))" },
      { type: "p", text: "Under Roman law — the very law that ordered this census — the minimum marriage age for girls was **12**, not 20. So even if participating in a Roman census somehow proved adulthood (it doesn't), Roman \"adulthood\" for marriage purposes was 12 for women." },
      { type: "p", text: "You can't appeal to a Roman census to prove Mary was 20+ when Roman law itself permitted marriage at 12. The Roman census proves nothing about Torah's supposed \"age 20\" requirement — because Rome had no such requirement." },
      { type: "h2", text: "Problem 3: Roman Women Couldn't Register Independently Anyway" },
      { type: "scripture", ref: "Luke 2:4-5 ", text: "Joseph also went up from Galilee... **to be registered** along with Mary, who was betrothed to him, and was with child." },
      { type: "p", text: "The text says Joseph went \"to be registered\" (ἀπογράψασθαι, apograpsasthai). Mary was \"with\" (σύν, syn) him. But even if you wanted to argue Mary was somehow registering independently, Roman law wouldn't require her to be 20+ — it would require her to have a male guardian." },
      { type: "p", text: "Under Roman law, **women were never legally independent regardless of age**:" },
      { type: "ul", items: [
        "**Wikipedia (Age of Majority)**: \"The age of adulthood was set at **12 for girls** and 14 for boys.\" ([source](https://en.wikipedia.org/wiki/Age_of_majority))",
        "**Law Explorer**: \"For girls, the *tutela impuberis* ended at the age of **twelve**, only to be replaced by the *tutela mulieris*. An adult woman (*mulier*) who became independent on the death of her father or husband was **also required to have a tutor** (guardian).\" ([source](https://lawexplores.com/the-guardianship-of-women/))"
      ]},
      { type: "p", text: "In Roman law, girls became legal \"adults\" (*mulier*) at **12**, not 20. But even then, they were never fully independent — they remained under male guardianship (*tutela mulieris*) for life unless they had 3+ children (*ius liberorum*). Full economic independence at age 25 applied only to **men**, not women." },
      { type: "p", text: "So your argument collapses entirely:" },
      { type: "ul", items: [
        "If Mary was registering as part of Joseph's household → She didn't need to be any particular age (Roman censuses counted everyone)",
        "If Mary was somehow registering \"independently\" → Roman law would require a male guardian, not age 20. And she would have been a legal \"adult\" at 12 anyway."
      ]},
      { type: "p", text: "There is no scenario in Roman law where a woman needed to be 20 years old to participate in anything. You're importing a Torah-based extrapolation into a Roman legal context where it has no application." },
      { type: "p", text: "**And notice what you're actually doing, Rich:** You're taking a Torah census requirement that applied only to **MALES** (Num 1:2-3, 26:2 — \"every male... from twenty years old and upward\"), applying it to a **ROMAN** census (which had completely different rules), to prove that **MARY** (a woman) was over 20 — when Roman law said women were legal adults at **12**, not 20." },
      { type: "p", text: "You know exactly why you need Mary to be over 20. If the mother of our Messiah was betrothed as a teenager — as was normal Jewish practice — your entire \"age 20\" framework collapses. So you're forced into this desperate, illogical argument: using a male-only Torah census requirement to interpret a Roman census to prove a woman's age meets a standard that exists in neither legal system." },
      { type: "h2", text: "Problem 4: Your Argument Proves Too Much" },
      { type: "p", text: "If Numbers 26:4 means ONLY those 20+ could be in ANY census, then:" },
      { type: "ul", items: [
        "Children under 20 were never counted in any census — but the scholarly evidence proves Roman censuses included \"women and children\" as part of the household declaration",
        "The unborn Jesus shouldn't have been relevant — but Luke specifically mentions Mary was \"with child\"",
        "No one under 20 could give offerings (Ex 30:14 by your logic) — but children participated in Passover"
      ]},
      { type: "p", text: "You're taking age requirements for SPECIFIC Israelite purposes (military service, temple tax, Levitical duty) and universalizing them to ALL contexts including a Roman administrative census. That's not how Torah works — and it's not how Roman censuses worked either." },
      { type: "h2", text: "The Historical Reality" },
      { type: "p", text: "We know from historical records that Jewish girls in the Second Temple period were typically betrothed in their early to mid-teens — this was the norm, not the exception. Your census argument is an attempt to escape this historical reality, but it doesn't work." },
      { type: "p", text: "But let's assume for argument's sake that Mary was 18 or 19 when she was betrothed to Joseph and found with child by the Holy Spirit. By your framework, an 18 or 19 year old is a \"child.\" Her marriage would be a \"child bride\" situation. The man who marries her would be — by your framework — guilty of the very conduct you condemn." },
      { type: "p", text: "So if Mary was 18 or 19, does that make Joseph guilty of the very conduct you condemn for betrothing her? Does it portray God as initiating a union your framework classifies as immoral — choosing her and overshadowing her with the Holy Spirit? **Are you prepared to say that?**" },
      { type: "h2", text: "Joseph Was Called Righteous" },
      { type: "p", text: "Scripture tells us Joseph was a \"righteous man\" (Matt 1:19). If betrothing a woman under 20 were sinful — if it made a man guilty of the conduct you condemn as your framework implies — wouldn't Scripture have noted Joseph's righteousness in THIS regard?" },
      { type: "p", text: "But we don't see that. Scripture commends Joseph's righteousness and says nothing about Mary's age being notable. No rebuke of the widespread practice of teen betrothal. No correction of the \"tradition.\" **The silence is deafening.**" },
      { type: "p", text: "Your census argument is a desperate attempt to avoid the obvious problem: if your framework is correct, it makes Joseph guilty of the very conduct you condemn, and portrays God as initiating a union your framework classifies as immoral. **That alone should tell you the framework is wrong.**" }
    ],
    question: "Your argument that Mary must have been 20+ because she 'participated in the census' fails — this was a ROMAN census for taxation that counted everyone including children, not the Israelite military census of Numbers 26:4. Luke even mentions she was 'with child' — was the unborn Jesus also 20+? And if Mary WAS under 20, does your framework make Joseph guilty of the very conduct you condemn, and portray God as initiating a union your framework classifies as immoral?"
  },
  {
    id: 21,
    part: 2,
    title: "The False Witness",
    subtitle: "By Your Own Standard, You Are Bearing False Witness Against Your Brothers",
    content: [
      { type: "h2", text: "The Slander You Are Speaking" },
      { type: "p", text: "Rich, by calling 18-19 year old women \"children\" and their marriages \"child brides,\" you are implicitly — and not subtly — labeling every man who lawfully marries an 18 or 19 year old woman a pedophile and pervert. You are slandering lawful marriages that God has not forbidden." },
      { type: "p", text: "This is serious. You are bearing false witness against brothers who have done nothing wrong according to Scripture." },
      { type: "p", text: "Think about what you're saying, Rich. By this logic, every priest, pastor, and minister in the United States who has ever officiated a wedding for an 18 or 19 year old bride has participated in a \"child marriage.\" They should all be arrested and charged. Every father who gave his 18 or 19 year old daughter in marriage is guilty of handing his child over to a pedophile." },
      { type: "p", text: "But charged with WHAT? There's a foundational legal principle: *nullum crimen sine lege, nulla poena sine lege* — \"no crime without law, no punishment without law.\" For someone to be guilty of a crime, there must be (1) a law that was violated, and (2) a prescribed penalty for violating it." },
      { type: "p", text: "This isn't just a legal principle — it's a SCRIPTURAL principle. And Rich, you know this because you use it yourself. You wrote:" },
      { type: "quote", text: "The opponents of polygyny are astronomically mistaken in stating plural marriage is sin—'where there is no law there is no transgression' (Rom 4:15).", source: "Your Twitter/X post (Dec 8, 2025)" },
      { type: "p", text: "Exactly right! Where there is no law, there is no transgression. Now apply YOUR OWN STANDARD to your age 20 requirement:" },
      { type: "ul", items: [
        "**Civil law violated?** None. An 18-year-old is a legal adult in every U.S. jurisdiction.",
        "**Civil penalty?** None exists.",
        "**Torah law violated?** None. Show me the verse that says 'You shall not marry a woman under 20.'",
        "**Torah penalty?** None exists. No sin offering. No restitution. No death penalty. No divorce required. Nothing."
      ]},
      { type: "p", text: "You're calling men criminals and pedophiles, but you cannot produce a single law — civil OR biblical — that they've broken, nor a single penalty — civil OR biblical — that applies to them." },
      { type: "p", text: "By YOUR OWN PRINCIPLE: **Where there is no law, there is no transgression.** There is no Torah law requiring age 20 for marriage. Therefore, by Romans 4:15 — the very verse YOU cite — marrying an 18 or 19 year old is NOT a transgression." },
      { type: "p", text: "**That's not righteous judgment, Rich. That's slander. You're calling men sinners for violating a law that doesn't exist.**" },
      { type: "h2", text: "The Torah Penalty for False Witness" },
      { type: "p", text: "Rich, you should consider carefully what Torah says about false accusations:" },
      { type: "scripture", ref: "Deuteronomy 19:16-19 ", text: "If a malicious witness rises up against a man to accuse him of wrongdoing, then both the men who have the dispute shall stand before YHVH, before the priests and the judges who will be in office in those days. The judges shall investigate thoroughly, and if the witness is a false witness and he has accused his brother falsely, **then you shall do to him just as he had intended to do to his brother.** Thus you shall purge the evil from among you." },
      { type: "p", text: "The Torah principle is clear: **whatever penalty the false accuser sought to impose on the innocent, that penalty falls on the false accuser instead.**" },
      { type: "p", text: "You are publicly calling men who marry 18-19 year old women \"pedophiles\" and \"perverts.\" You are implying they deserve criminal punishment, social ostracism, and condemnation. But they have violated NO civil law and NO Torah law." },
      { type: "p", text: "By Deuteronomy 19:18-19, if you are bearing false witness against your brothers — accusing them of wrongdoing when no law exists — then **the penalty you sought to impose on them falls on you.**" },
      { type: "p", text: "This is serious, Rich. You're not just making a theological argument. You're publicly accusing men of being child predators when they've done nothing wrong according to Scripture. That's not iron sharpening iron. That's bearing false witness against your neighbor — and Torah prescribes a penalty for it." }
    ],
    question: "You use Romans 4:15 ('where there is no law, there is no transgression') to defend polygyny. By that same principle, where is the Torah law against marrying an 18 or 19 year old? If there is none, then by your own standard, it is NOT a transgression — and calling these men 'pedophiles' is bearing false witness. What does Deuteronomy 19:18-19 say should happen to a false witness?"
  },
  {
    id: 22,
    part: 2,
    title: "The Loophole You've Created",
    subtitle: "Your Framework Creates a Hunting Ground for Predators",
    content: [
      { type: "p", text: "Here's what your framework actually does in practice. It provides wicked men the perfect opportunity to target women between 18 and 19:" },
      { type: "ul", items: [
        "**Civil law** says 18+ is a legal adult — no criminal punishment for consensual relations with an 18-19 year old",
        "**Your Torah framework** says under 20 cannot be married — so Exodus 22:16-17 (seduction laws) cannot apply to her",
        "**Result:** The predator faces consequences from NEITHER system"
      ]},
      { type: "p", text: "A wicked man who wants to use women without consequence would specifically target 18-19 year olds. The civil system can't punish him because she's a legal adult. And according to YOUR framework, Torah's protections can't apply either because she's a \"child\" who cannot be married." },
      { type: "p", text: "**Your framework doesn't protect young women — it creates a hunting ground for predators.** The very women you claim to be protecting are left completely vulnerable because you've nullified the Torah provisions designed to protect them." },
      { type: "h2", text: "Torah's Actual Protection" },
      { type: "p", text: "Torah's protection for young women isn't an arbitrary age requirement — it's **the father's authority**. A father can approve or annul a marriage (Numbers 30, Exodus 22:16-17). This protection works for ANY age because it's relational, not numerical." },
      { type: "p", text: "By inventing an age requirement Torah doesn't give, you've nullified the protection Torah DOES give. A 19-year-old's father cannot invoke Exodus 22:16-17 in your framework because, according to you, she can't be married. The seducer walks free." },
      { type: "p", text: "**This is the fruit of adding to Torah.** You create loopholes that wicked men can exploit, while claiming to protect the very people your framework abandons." }
    ],
    question: "Under your framework, what recourse does a father have if a man seduces his 19-year-old daughter? Exodus 22:16-17 requires the seducer to marry her AND pay the bride price — but you say she CAN'T be married until 20. The seducer walks free. How does your framework protect her?"
  },
  {
    id: 23,
    part: 3,
    title: "The Irony",
    subtitle: "You Have Become What You Fight Against",
    position: {
      text: "If one desires the Law of God only when it serves their carnal interests, and not when it restrains their perversions, they're not pursuing divine transformation but mere mortal validation.",
      source: "Your Twitter/X and Instagram post (Dec 10, 2025)"
    },
    scriptures: [
      {
        ref: "1 Corinthians 7:9 ",
        text: "But if they do not have self-control, let them marry; for it is better to marry than to burn with passion."
      }
    ],
    content: [
      { type: "p", text: "Rich, based on the timing of this post, it seems you are inferring that those who disagree with you on the marriage age or divorced women remarrying only love the Law of God when it serves their carnal interests — that they're pursuing \"perversions\" rather than \"divine transformation.\"" },
      { type: "p", text: "Let's examine whose framework actually benefits whom." },
      { type: "h2", text: "What YOUR Framework Gives YOU" },
      { type: "ul", items: [
        "Full freedom to marry any virgin, widow, or convert",
        "Your 2nd wife's pre-conversion unions are dissolved (so it's not adultery for you to take her)",
        "Ability to take additional wives",
        "No mechanism by which your wives can hold you accountable for neglect — you reject Exodus 21:10-11 as grounds for her freedom, and you say believing one-flesh unions are permanent"
      ]},
      { type: "h2", text: "What YOUR Framework Binds on WOMEN" },
      { type: "ul", items: [
        "If divorced, she can NEVER remarry (even if her husband wronged her)",
        "If her husband neglects her, NO recourse (Ex 21:10-11 ignored)",
        "If under 20, Torah's protections don't apply",
        "Permanent bondage even if husband abandoned obligations"
      ]},
      { type: "p", text: "Paul says it's \"better to marry than to burn.\" What is your answer for the legitimately divorced 25-year-old woman who lacks the gift of celibacy? You've told her she cannot remarry for perhaps 40+ years. **You have removed Paul's remedy and created a pressure cooker for sin.**" },
      { type: "p", text: "**Every ambiguity in your framework resolves in favor of male freedom and against female protection.** So who is really pursuing \"carnal interests\"?" },
      { type: "h2", text: "The Double Standard" },
      { type: "p", text: "You spend nearly every day defending polygyny against \"enforced monogamy\" Christians. Your primary argument? **\"Where there is no law, there also is no violation\" (Romans 4:15).** You rightly point out that Torah never prohibits a man from having multiple wives, so calling it sin is ADDING to Scripture." },
      { type: "p", text: "**And yet you are doing the exact same thing to divorced women and to those who marry women under 20.**" },
      { type: "ul", items: [
        "They say: \"One flesh means one wife\" — *adding to Torah*",
        "You say: \"Believing one-flesh unions can never be dissolved\" — *adding to Torah (Deut 24:2 and Num 30:9 flatly contradict this)*",
        "You say: \"Marriage requires age 20\" — *adding to Torah (no verse says this)*",
        "They ignore Exodus 21:10 which permits additional wives — *subtracting from Torah*",
        "You ignore Deuteronomy 24:2 which permits divorced women to remarry — *subtracting from Torah*",
        "You ignore Deut 22:24 which calls the betrothed na'ara a WIFE — *subtracting from Torah*"
      ]},
      { type: "p", text: "**You are doing to divorced women and young brides exactly what enforced-monogamy teachers do to you.**" },
      { type: "h2", text: "The 12 Million Contradiction" },
      { type: "p", text: "You've made the 12 million women surplus a centerpiece of your argument for polygyny:" },
      { type: "quote", text: "The US Christian Church is denying 12,000,000 WOMEN marriage & motherhood, even while the Western fertility rate plummets to 1.6", source: "Your Instagram post (Dec 2025)" },
      { type: "quote", text: "Monogamy-Only is a Doctrine of Demons (see 1 Tim 4:1-3), leaving nearly 12 million American Christian women unable to marry and have children as they're commanded.", source: "Your Twitter/X post (Dec 2025)" },
      { type: "p", text: "Rich, how many of those 12 million women are divorced? You use this surplus to promote polygyny — arguing these women NEED polygyny to find husbands. But simultaneously, your framework teaches that most divorced believing women **can never remarry at all**." },
      { type: "p", text: "**You cannot have both.** YOUR framework denies divorced women remarriage. YOUR framework removes Torah's protections from women under 20. Who is really denying women marriage?" },
      { type: "h2", text: "The Ancient Israel Irony" },
      { type: "p", text: "You hold up ancient Israel's practices as **good fruit** — their population growth through polygyny. But ancient Israel achieved that growth through polygyny AND through marrying women in their teens — not at age 20." },
      { type: "p", text: "If ancient Israel's marriage practices produced good fruit, why do you condemn half of what they did? If marrying women under 20 was sinful, why didn't Christ or the apostles correct it? They corrected handwashing, Corban, Sabbath legalism, and divorce practices — but not this?" },
      { type: "p", text: "**You're celebrating the fruit while condemning half the tree that produced it.**" },
      { type: "h2", text: "The Doctrines of Demons Irony" },
      { type: "p", text: "You cite 1 Timothy 4:1-3 to call monogamy-only teaching a \"Doctrine of Demons.\" Let's look at what it says:" },
      { type: "scripture", ref: "1 Timothy 4:1-3 ", text: "But the Spirit explicitly says that in later times some will fall away from the faith, paying attention to deceitful spirits and doctrines of demons, by means of the hypocrisy of liars seared in their own conscience as with a branding iron, men who **forbid marriage**..." },
      { type: "p", text: "The doctrine of demons is specifically about **forbidding marriage**. Now look at your positions:" },
      { type: "ul", items: [
        "Divorced believing women — **forbidden to remarry** (for decades, perhaps for life)",
        "Women under 20 — **forbidden to marry** (even with father's consent, even as legal adults)",
        "Men who marry 18-19 year olds — told they're in sin and their marriages are invalid"
      ]},
      { type: "p", text: "Monogamy-only doctrine forbids men from taking *additional* wives. Your doctrine forbids *entire categories of women* from marrying at all. **Who is forbidding more marriages here?**" },
      { type: "p", text: "You use 1 Timothy 4:1-3 as a weapon against your critics while your own framework does exactly what the passage condemns — **forbidding marriage**." }
    ],
    question: "You accuse others of pursuing 'carnal interests' and 'perversions.' But whose framework gives men full freedom while binding permanent celibacy on divorced women and removing Torah's protections from young women? Whose framework forbids entire categories of women from marrying while accusing others of being 'doctrines of demons' for forbidding marriage? And whose framework allows predatory men to target 18- and 19-year-old women for sex with zero covenantal consequences — since, by your logic, no valid marriage can exist?"
  },
  {
    id: 24,
    part: 3,
    title: "The Principles You're Violating",
    subtitle: "You Use These Rules for Polygyny — Why Not for Divorced Women?",
    scriptures: [
      {
        ref: "Matthew 5:17-19 ",
        text: "Do not think that I came to abolish the Law or the Prophets; I did not come to abolish but to fulfill. For truly I say to you, until heaven and earth pass away, not the smallest letter or stroke shall pass from the Law until all is accomplished. **Whoever then annuls one of the least of these commandments, and teaches others to do the same, shall be called least in the kingdom of heaven**; but whoever keeps and teaches them, he shall be called great in the kingdom of heaven."
      }
    ],
    content: [
      { type: "p", text: "Rich, there are well-established legal and interpretive principles that both Scripture and sound reasoning demand. You USE these principles when defending polygyny. But you abandon them when they don't serve your conclusions. Let me show you:" },
      { type: "h2", text: "1. No Law, No Sin" },
      { type: "p", text: "**The Principle:** Sin requires explicit grounding in law. You rightly quote Romans 4:15: \"Where there is no law there is no transgression.\" Torah never prohibits polygyny, so it's not sin." },
      { type: "p", text: "**Your Violation:** Where is the Torah law that says a divorced woman cannot remarry? **Torah says the opposite** (Deut 24:2). Where is the Torah law requiring age 20 for marriage? **It doesn't exist.** You're calling things sin that Torah never calls sin — and in the case of remarriage, Torah explicitly PERMITS it." },
      { type: "h2", text: "2. Specific Laws Outrank General Principles" },
      { type: "p", text: "**The Principle:** When a specific statute addresses a matter, it governs over general principles. This is basic legal interpretation — see Deuteronomy 17:8-11." },
      { type: "p", text: "**Your Violation:** Torah contains SPECIFIC statutes about divorced women: Deuteronomy 24:2 (she may remarry), Numbers 30:9 (she has no husband), Exodus 21:10-11 (she goes out free). You're using a GENERAL reading of Romans 7:2 (about married women) to override these SPECIFIC Torah statutes. **That's backwards.**" },
      { type: "h2", text: "3. Ambiguity Cannot Create New Sins" },
      { type: "p", text: "**The Principle:** When Scripture is ambiguous, the ambiguity cannot be used to create new categories of sin. This protects against binding what God has not bound — see Deuteronomy 4:2." },
      { type: "p", text: "**Your Violation:** Torah EXPLICITLY permitted remarriage (Deut 24:2). If Jesus's words are ambiguous — and reasonable people disagree — that ambiguity cannot reverse explicit Torah permission. **When Torah says YES and interpretation is disputed, you cannot use the dispute to say NO.**" },
      { type: "h2", text: "4. No Retroactive Condemnation" },
      { type: "p", text: "**The Principle:** Later texts cannot criminalize conduct that was lawful when performed. When Deuteronomy 24:1-2 was given, remarriage after divorce was explicitly permitted." },
      { type: "p", text: "**Your Violation:** If your interpretation of Jesus is correct, you're making Jesus retroactively condemn what Torah permitted. But Jesus said He came NOT to abolish the Law (Matt 5:17). **He cannot be retroactively criminalizing Torah-permitted conduct.**" },
      { type: "h2", text: "5. Major Institutions Require Explicit Repeal" },
      { type: "p", text: "**The Principle:** To overturn a major Torah institution requires explicit, unmistakable repeal language — not disputed interpretations. See Deuteronomy 12:32." },
      { type: "p", text: "**Your Violation:** Deuteronomy 24:1-4 establishes a MAJOR institution — Torah's divorce and remarriage law. Did Jesus ever say \"Deuteronomy 24 is hereby repealed\"? \"The certificate no longer releases\"? \"Moses permitted remarriage, but I forbid it\"? **No.** You're deriving repeal from disputed interpretations. That's insufficient." },
      { type: "h2", text: "6. Charges of Sin Require Multiple Clear Witnesses" },
      { type: "p", text: "**The Principle:** \"On the evidence of two or three witnesses a matter shall be confirmed\" (Deuteronomy 19:15). To charge someone with sin, you need multiple clear statutory witnesses." },
      { type: "p", text: "**Your Violation:** Where are your witnesses against divorced women remarrying? **Torah (Deut 24:2)** says she MAY remarry — witness AGAINST you. **Numbers 30:9** says she has no husband — witness AGAINST you. Jesus's words? Disputed interpretation. Romans 7:2? About married women, not divorced. **You have ZERO clear witnesses FOR your position and multiple AGAINST it.**" },
      { type: "h2", text: "Your Interpretation Creates an Impossible Problem" },
      { type: "p", text: "Rich, we both agree that Messiah did not come to abolish the Law. Jesus Himself said:" },
      { type: "p", text: "\"**Whoever then annuls one of the least of these commandments, and teaches others to do the same, shall be called least in the kingdom of heaven.**\"" },
      { type: "p", text: "Now consider what YOUR interpretation requires. If your reading of Jesus's divorce teaching is correct, then Jesus Himself would have annulled:" },
      { type: "ul", items: [
        "**Deuteronomy 24:2** — which says a divorced woman \"may go and become another man's wife\"",
        "**Numbers 30:9** — which says the divorced woman has no husband",
        "**Exodus 21:10-11** — which says she goes out free if he doesn't provide"
      ]},
      { type: "p", text: "Do you see the problem? **Your interpretation forces Jesus into the category of those who annul commandments — making Him 'least in the kingdom' by His own standard.** That is impossible. Jesus cannot contradict Himself." },
      { type: "p", text: "This means one of two things must be true:" },
      { type: "ul", items: [
        "Either your interpretation of Jesus's words is WRONG (and should be read in harmony with Torah, not against it), or",
        "Jesus contradicted Himself and annulled Torah commands (which is impossible)"
      ]},
      { type: "p", text: "The only logical conclusion is that **your interpretation is wrong**. Jesus's words about divorce MUST be read in a way that harmonizes with Torah — not in a way that annuls explicit Torah permissions." },
      { type: "h2", text: "You Are the One Annulling Commandments" },
      { type: "p", text: "And here's the irony: by teaching this interpretation — one that CANNOT be correct because it would make Christ a Torah-annuller — **you** are the one annulling commandments and teaching others to do the same:" },
      { type: "ul", items: [
        "You teach that Deuteronomy 24:2's permission no longer applies — **annulling it**",
        "You teach that Numbers 30:9's classification no longer applies — **annulling it**",
        "You teach that Exodus 21:10-11's freedom no longer applies — **annulling it**",
        "Your age 20 requirement nullifies Exodus 22:16-17's protection for 18-19 year olds — **annulling it**",
        "Your age 20 requirement nullifies Deuteronomy 22:23-24's adultery statute for betrothed women under 20 — **annulling it**",
        "Your age 20 requirement nullifies Numbers 30:6-8's provision for husbands to annul vows of women married in their youth — **annulling it**"
      ]},
      { type: "p", text: "Jesus said whoever annuls commandments and teaches others to do the same shall be called least in the kingdom. **These are His words, Rich. Not mine.** And your framework is doing exactly what He warned against — while claiming His authority to do it." }
    ],
    question: "Your interpretation of Jesus's divorce teaching would require Jesus to have annulled Deuteronomy 24:2, Numbers 30:9, and Exodus 21:10-11 — making Him 'least in the kingdom' by His own words. Since that's impossible, doesn't your interpretation HAVE to be wrong? And if you continue teaching it, aren't YOU the one annulling commandments?"
  },
  {
    id: 25,
    part: 3,
    title: "Final Summary",
    subtitle: "The Questions You Must Answer",
    scriptures: [
      {
        ref: "Mark 7:9, 13 ",
        text: "You are experts at setting aside the commandment of God in order to keep your tradition... thus **invalidating the word of God** by your tradition which you have handed down; and you do many things such as that."
      }
    ],
    content: [
      { type: "p", text: "Rich, I have presented these questions because I believe your framework contains fundamental contradictions. Let me summarize:" },
      { type: "h2", text: "On Divorce and Remarriage" },
      { type: "ul", items: [
        "**Numbers 30:9** — Torah places the divorced woman in the same category as the widow. She has NO husband. She is not *hypandros*.",
        "**Deuteronomy 24:2** — Torah explicitly says she \"may go and become another man's wife.\" You call this adultery.",
        "**Exodus 21:10-11** — If he doesn't provide, she goes out FREE. Either divorce does something, or he still owes her.",
        "**The Rahab Problem** — You dissolve 100+ unbelieving one-flesh unions for a convert, but one believing union can never be dissolved?",
        "**God Divorced Israel (Jeremiah 3:8)** — God Himself dissolved a marriage covenant relationship.",
        "**Leviticus 21:7** — Why prohibit PRIESTS from marrying divorced women if NO believer can marry them?",
        "**The Death Penalty Problem** — If adultery warranted death, her \"one-flesh\" husband would be dead — and she'd be free anyway.",
        "**The Category Error** — You quote Romans 7:2 about \"married women\" but apply it to divorced women.",
        "**The 12 Million Contradiction** — You use divorced women to argue for polygyny while denying them remarriage."
      ]},
      { type: "h2", text: "On the Age 20 Requirement" },
      { type: "ul", items: [
        "**Not in Torah** — You cannot cite a single verse requiring age 20 for marriage.",
        "**Deuteronomy 22:23-24** — Torah calls a betrothed na'ara a \"WIFE\" and charges her with adultery.",
        "**Your Linguistic Argument Fails** — Deut 22:24 calls the na'ara his \"wife\" (אֵשֶׁת). Self-contradiction.",
        "**Numbers 30 Contradiction** — You say ne'urim are not covenant-accountable, but Torah holds them accountable for vows.",
        "**\"Wife of Your Youth\" (Malachi 2:14)** — God calls a woman married in her ne'urim \"your wife by covenant.\"",
        "**Your Own Argument Condemns You** — Silence on polygyny = permitted. Silence on marriage before 20 = forbidden?",
        "**The False Witness** — You call men \"pedophiles\" for marrying legal adults who broke no law.",
        "**The Loophole** — Your framework leaves 18-19 year olds unprotected. Predators walk free.",
        "**The Ancient Israel Irony** — You celebrate their fertility through polygyny while condemning marriage before 20."
      ]},
      { type: "h2", text: "On Your Own Standards" },
      { type: "ul", items: [
        "**Romans 4:15** — \"Where there is no law, there is no transgression.\" Apply your own standard.",
        "**Mark 7:9, 13** — Jesus rebuked those who INVALIDATE the word of God. Your age 20 requirement invalidates Exodus 22:16-17, Deuteronomy 22:23-24, and Numbers 30:6-8. Your divorce positions invalidate Deuteronomy 24:2, Numbers 30:9, and Exodus 21:10-11.",
        "**1 Timothy 4:1-3** — You call monogamy-only a \"Doctrine of Demons\" for forbidding marriage. YOUR positions forbid more.",
        "**Matthew 5:19** — Your interpretation would make Christ an annuller of Torah. Since that's impossible, your interpretation must be wrong — and YOU are the one annulling commandments."
      ]},
      { type: "h2", text: "A Brotherly Appeal" },
      { type: "p", text: "Rich, I began this letter with thanksgiving for your zeal, and I want to end it the same way. I believe you genuinely want to honor YHWH and His Torah. I believe you care about protecting women and upholding the sanctity of marriage. These are good desires, and I share them." },
      { type: "p", text: "But brother, I am asking you to prayerfully consider whether your framework — in its zeal to protect — has actually bound burdens that God has not bound, and removed protections that God has given." },
      { type: "p", text: "You fight every day against Christians who add \"one wife\" to Torah's silence on polygyny. You know exactly how it feels to have people bind what God has not bound, to have your faithfulness questioned, to be called a pervert for following what you believe Scripture permits. You're a pastor with two wives who is routinely slandered for what God does not condemn. I am asking you to extend that same grace to others — to your divorced brothers and sisters in Christ who believe Torah permits remarriage, and to those who married at 18 or 19 in full compliance with civil and biblical law." },
      { type: "p", text: "When you call marriage at 18-19 years old \"child marriage\" and a \"perversion,\" are you really willing to say that to your 18- and 19-year-old brothers and sisters in Messiah? Would you forbid a man and his wife married at 18 from membership in your church? Would you tell a young bride she's living in sin? These are real people, Rich — not abstractions. They are members of the body of Christ who have broken no law, civil or biblical." },
      { type: "p", text: "If I have erred in my understanding of these passages, I welcome correction. Show me from Torah where I am wrong. But if these arguments have merit — if Torah really does release the divorced woman, if there really is no age 20 marriage requirement — then I ask you to consider what it means to continue teaching otherwise." },
      { type: "p", text: "We who teach will be judged with greater strictness (James 3:1). That warning applies to both of us. May we both have the humility to be corrected by Scripture, and the courage to change when we have been shown to be wrong." },
      { type: "p", text: "I offer this letter not as an attack, but as iron sharpening iron. Whatever wounds it may cause, let them be the faithful wounds of a friend (Proverbs 27:6)." },
      { type: "p", text: "Rich, I ask you to take these questions before the Lord in prayer. Search the Scriptures. If my arguments are wrong, show me where. But if they have merit, I trust you will have the integrity to reconsider — for the sake of the brothers and sisters affected by these teachings. Grace and peace to you, brother." }
    ]
  }
];

const closing = {
  signature: "Your brother in Messiah,",
  signatureLine2: "seeking truth together in love",
  finalVerse: {
    text: "Now may the God of peace Himself sanctify you entirely; and may your spirit and soul and body be preserved complete, without blame at the coming of our Lord Yeshua the Messiah. Faithful is He who calls you, and He also will bring it to pass.",
    ref: "1 Thessalonians 5:23-24 "
  }
};

// ============================================
// COMPONENTS
// ============================================

// Parse markdown-style bold text
const parseText = (text) => {
  if (!text) return null;
  // Handle ***bold italic***, **bold**, and [link](url)
  const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('***') && part.endsWith('***')) {
      return <strong key={i} className="font-semibold italic">{part.slice(3, -3)}</strong>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    // Handle markdown links [text](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{linkMatch[1]}</a>;
    }
    return part;
  });
};

const Scripture = ({ reference, text }) => (
  <div className="my-8 p-6 border border-orange-100 rounded-lg bg-orange-50/50">
    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-orange-400 block mb-3">
      {reference}
    </span>
    <p className="font-serif text-lg italic leading-relaxed text-gray-800 m-0">
      {parseText(text)}
    </p>
  </div>
);

const Quote = ({ text, source }) => (
  <div className="my-8 p-6 border border-gray-200 rounded-lg">
    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-3">
      Your Position
    </span>
    <p className="font-serif text-base italic leading-relaxed text-gray-600 mb-3">
      "{text}"
    </p>
    <div className="font-sans text-sm text-gray-500">— {source}</div>
  </div>
);

const Question = ({ text }) => (
  <div className="my-10 p-7 bg-gray-50 border border-gray-600 rounded-lg">
    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gray-900 block mb-3">
      My Question
    </span>
    <p className="font-serif text-lg font-medium leading-relaxed text-gray-900 m-0">
      {parseText(text)}
    </p>
  </div>
);

const Note = ({ title, content }) => (
  <div className="my-6 p-5 bg-gray-50 border-l-2 border-gray-500">
    <div className="font-sans text-sm font-semibold text-gray-600 mb-2">{title}</div>
    <p className="font-serif text-base leading-relaxed text-gray-600 m-0">{content}</p>
  </div>
);

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p className="font-serif text-lg leading-relaxed text-gray-800 mb-6">{parseText(block.text)}</p>;
    case 'h2':
      return <h2 className="font-serif text-2xl font-normal italic text-gray-900 mt-12 mb-6">{block.text}</h2>;
    case 'ul':
      return (
        <ul className="my-6 ml-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="font-serif text-lg leading-relaxed text-gray-800">
              {parseText(item)}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="my-6 ml-6 space-y-3 list-decimal">
          {block.items.map((item, i) => (
            <li key={i} className="font-serif text-lg leading-relaxed text-gray-800">
              {parseText(item)}
            </li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <div className="my-8 p-6 border border-gray-200 rounded-lg">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-3">
            Your Own Words
          </span>
          <p className="font-serif text-base italic leading-relaxed text-gray-600 mb-3">
            "{block.text}"
          </p>
          <div className="font-sans text-sm text-gray-500">— {block.source}</div>
        </div>
      );
    case 'scripture':
      return (
        <div className="my-8 p-6 bg-orange-50/50 border border-orange-100 rounded-lg">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-orange-400 block mb-3">
            {block.ref}
          </span>
          <p className="font-serif text-base leading-relaxed text-gray-700">
            {parseText(block.text)}
          </p>
        </div>
      );
    default:
      return null;
  }
};

const SectionView = ({ section, onNext, onPrev, isLast, nextTitle }) => {
  const part = parts.find(p => p.id === section.part);
  
  return (
    <div className="min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 px-4 py-2 border border-gray-200 rounded-full mb-4">
            {part.title}
          </span>
          <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-4">
            {section.title}
          </h1>
          <div className="w-16 h-px bg-gray-200 mx-auto my-6" />
          <p className="font-sans text-sm uppercase tracking-wide text-gray-500">
            {section.subtitle}
          </p>
        </div>

        {/* Lead */}
        {section.lead && (
          <p className="font-serif text-xl italic text-gray-600 mb-10 text-center">
            {section.lead}
          </p>
        )}

        {/* Position Quote */}
        {section.position && <Quote text={section.position.text} source={section.position.source} />}

        {/* Scriptures */}
        {section.scriptures?.map((s, i) => (
          <Scripture key={i} reference={s.ref} text={s.text} />
        ))}

        {/* Content */}
        {section.content?.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}

        {/* Additional Content (for sections with scriptures in middle) */}
        {section.additionalContent?.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}

        {/* Question */}
        {section.question && <Question text={section.question} />}

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={onPrev}
            className="font-sans text-sm font-medium px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <span>←</span> Back
          </button>
          
          {!isLast && (
            <div className="text-right">
              <div className="font-sans text-xs text-gray-500">Next Section:</div>
              <div className="font-serif text-base text-gray-900">{nextTitle}</div>
            </div>
          )}
          
          <button
            onClick={onNext}
            className="font-sans text-sm font-medium px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            {isLast ? 'Finish' : 'Next'} <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const IntroView = ({ onStart }) => (
  <div className="min-h-screen py-16 px-6 lg:px-12">
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 px-4 py-2 border border-gray-200 rounded-full mb-4">
          {siteConfig.subtitle}
        </span>
        <h1 className="font-serif text-5xl font-semibold text-gray-900 mb-4">
          {siteConfig.title}
        </h1>
        <div className="w-16 h-px bg-gray-200 mx-auto my-6" />
        <p className="font-sans text-sm uppercase tracking-wide text-gray-500">
          {siteConfig.verse}
        </p>
      </div>

      {/* Epigraph */}
      <p className="font-serif text-xl italic text-gray-600 mb-10 text-center">
        "{siteConfig.epigraph}"
      </p>

      {/* Salutation */}
      <p className="font-serif text-lg font-semibold text-gray-900 mb-6">
        {introduction.salutation}
      </p>

      {/* Opening Paragraphs */}
      {introduction.paragraphs.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-relaxed text-gray-800 mb-6">
          {p}
        </p>
      ))}

      {/* Two Main Arguments */}
      {introduction.twoArguments && (
        <div className="my-8 space-y-6">
          {introduction.twoArguments.map((arg, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">{arg.title}</h3>
              <p className="font-serif text-base leading-relaxed text-gray-600">{parseText(arg.summary)}</p>
            </div>
          ))}
        </div>
      )}

      {/* Irony Summary */}
      {introduction.ironySummary && (
        <p className="font-serif text-lg leading-relaxed text-gray-800 mb-8">
          {introduction.ironySummary}
        </p>
      )}

      {/* Notes */}
      {introduction.notes.map((note, i) => (
        <Note key={i} title={note.title} content={note.content} />
      ))}

      {/* Start Button */}
      <div className="mt-16 pt-8 border-t border-gray-200 flex justify-end items-center">
        <button
          onClick={() => onStart(1)}
          className="font-sans text-sm font-medium px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          Begin Reading <span>→</span>
        </button>
      </div>
    </div>
  </div>
);

const ClosingView = ({ onPrev, onRestart }) => (
  <div className="min-h-screen py-16 px-6 lg:px-12">
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 px-4 py-2 border border-gray-200 rounded-full mb-4">
          Closing
        </span>
        <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-4">
          Iron Sharpens Iron
        </h1>
        <div className="w-16 h-px bg-gray-200 mx-auto my-6" />
      </div>

      {/* Signature */}
      <div className="text-center mb-16">
        <p className="font-serif text-xl italic text-gray-600 mb-2">
          {closing.signature}
        </p>
        <p className="font-serif text-lg italic text-gray-500">
          {closing.signatureLine2}
        </p>
      </div>

      {/* Final Verse */}
      <div className="pt-8 border-t border-gray-200 text-center">
        <p className="font-serif text-lg italic text-gray-500 mb-2">
          "{closing.finalVerse.text}"
        </p>
        <p className="font-sans text-sm text-gray-400">
          — {closing.finalVerse.ref}
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={onPrev}
          className="font-sans text-sm font-medium px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <span>←</span> Back
        </button>
        
        <button
          onClick={onRestart}
          className="font-sans text-sm font-medium px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          Start Over <span>↺</span>
        </button>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN APP
// ============================================

export default function App() {
  const [currentSection, setCurrentSection] = useState(0); // 0 = intro, 1-24 = sections, 25 = closing
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

  // Close mobile menu when section changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentSection]);

  const handleNext = () => {
    if (currentSection <= sections.length) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (id) => {
    setCurrentSection(id);
  };

  return (
    <div className="bg-white min-h-screen flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div onClick={() => goToSection(0)} className="cursor-pointer">
          <h1 className="font-serif text-lg font-semibold text-gray-900">Iron Sharpens Iron</h1>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto flex-shrink-0 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-5">
          {/* Logo/Title */}
          <div
            className="mb-6 cursor-pointer"
            onClick={() => goToSection(0)}
          >
            <h1 className="font-serif text-lg font-semibold text-gray-900">Iron Sharpens Iron</h1>
            <p className="font-sans text-xs text-gray-500 mt-1">A Letter to Brother Rich</p>
          </div>

          {/* Intro Link */}
          <div
            onClick={() => goToSection(0)}
            className={`py-2 px-3 rounded-lg cursor-pointer transition-colors mb-4 ${currentSection === 0 ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <span className="font-sans text-sm font-medium">Introduction</span>
          </div>

          {/* Parts and Sections */}
          <nav className="space-y-5">
            {parts.map(part => (
              <div key={part.id}>
                <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2 px-3">
                  {part.title}
                </div>
                <div className="space-y-0.5">
                  {sections.filter(s => s.part === part.id).map(section => (
                    <div
                      key={section.id}
                      onClick={() => goToSection(section.id)}
                      className={`py-1.5 px-3 rounded-lg cursor-pointer transition-colors ${currentSection === section.id ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <span className={`font-sans text-xs mr-1.5 ${currentSection === section.id ? 'text-gray-400' : 'text-gray-400'}`}>{section.id}.</span>
                      <span className="font-sans text-sm">{section.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Closing Link */}
            <div className="pt-4 border-t border-gray-200">
              <div
                onClick={() => goToSection(sections.length + 1)}
                className={`py-1.5 px-3 rounded-lg cursor-pointer transition-colors ${currentSection > sections.length ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span className="font-sans text-sm font-medium">Closing</span>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-80 flex-1 pt-14 lg:pt-0">
        {currentSection === 0 && (
          <IntroView onStart={goToSection} />
        )}
        
        {currentSection > 0 && currentSection <= sections.length && (
          <SectionView
            section={sections[currentSection - 1]}
            onNext={handleNext}
            onPrev={handlePrev}
            isLast={currentSection === sections.length}
            nextTitle={sections[currentSection]?.title || 'Conclusion'}
          />
        )}
        
        {currentSection > sections.length && (
          <ClosingView 
            onPrev={handlePrev} 
            onRestart={() => setCurrentSection(0)} 
          />
        )}
      </main>
    </div>
  );
}