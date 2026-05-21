// CIPP/E MCQs — exam-style. `answer` is the index (0-based) of the correct option.
window.MCQS = [
  {
    id: "q-001",
    domain: "I. Introduction to European Data Protection",
    question: "Which instrument is the first binding international treaty on data protection?",
    options: [
      "OECD Privacy Guidelines (1980)",
      "Council of Europe Convention 108 (1981)",
      "Directive 95/46/EC",
      "Charter of Fundamental Rights of the EU"
    ],
    answer: 1,
    explanation: "Convention 108 (1981) is the only legally binding international instrument on data protection. The OECD Guidelines are influential but non-binding."
  },
  {
    id: "q-002",
    domain: "I. Introduction to European Data Protection",
    question: "Article 8 of the Charter of Fundamental Rights establishes which right?",
    options: [
      "Right to private and family life",
      "Right to freedom of expression",
      "Right to the protection of personal data",
      "Right to an effective remedy"
    ],
    answer: 2,
    explanation: "Article 8 is the standalone right to protection of personal data, distinct from Article 7 (private and family life)."
  },
  {
    id: "q-003",
    domain: "II. European Regulatory Institutions",
    question: "Which body issues binding decisions to resolve disputes between national supervisory authorities under the GDPR consistency mechanism?",
    options: [
      "European Commission",
      "European Data Protection Supervisor (EDPS)",
      "Court of Justice of the EU",
      "European Data Protection Board (EDPB)"
    ],
    answer: 3,
    explanation: "Under Art. 65 GDPR, the EDPB issues binding decisions where lead and concerned SAs disagree."
  },
  {
    id: "q-004",
    domain: "II. European Regulatory Institutions",
    question: "The EDPS primarily supervises:",
    options: [
      "All controllers established in the EU",
      "EU institutions, bodies, offices and agencies",
      "Cross-border processing by multinationals",
      "Processing of special category data"
    ],
    answer: 1,
    explanation: "The EDPS is the supervisory authority for EU institutions and bodies themselves; national DPAs supervise other controllers."
  },
  {
    id: "q-005",
    domain: "III. Legislative Framework",
    question: "Which of the following is NOT a GDPR principle under Article 5?",
    options: [
      "Purpose limitation",
      "Data minimisation",
      "Subject consent",
      "Storage limitation"
    ],
    answer: 2,
    explanation: "Consent is a lawful basis (Art. 6), not a principle. The Art. 5 principles are lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity & confidentiality, and accountability."
  },
  {
    id: "q-006",
    domain: "III. Legislative Framework",
    question: "Under GDPR, consent must be:",
    options: [
      "Implicit and ongoing",
      "Freely given, specific, informed and unambiguous",
      "Documented by handwritten signature",
      "Renewed every twelve months"
    ],
    answer: 1,
    explanation: "Art. 4(11) and Art. 7 set the four cumulative conditions. There is no fixed renewal interval and signatures are not required."
  },
  {
    id: "q-007",
    domain: "III. Legislative Framework",
    question: "Which of these is a 'special category' of personal data under Article 9?",
    options: [
      "Bank account number",
      "Postal address",
      "Biometric data used to uniquely identify a person",
      "Date of birth"
    ],
    answer: 2,
    explanation: "Biometric data for unique identification is special category. The others are ordinary personal data unless combined to reveal special data."
  },
  {
    id: "q-008",
    domain: "III. Legislative Framework",
    question: "A US-based e-commerce site ships products to consumers in Germany and prices in euros. Does GDPR apply?",
    options: [
      "No — GDPR only covers EU-established companies",
      "Yes — Art. 3(2)(a) extraterritorial scope (offering goods to EU data subjects)",
      "Only if the company has more than 250 employees",
      "Only if it uses cookies"
    ],
    answer: 1,
    explanation: "Pricing in euros and shipping to Germany evidences targeting EU data subjects, triggering Art. 3(2)(a)."
  },
  {
    id: "q-009",
    domain: "III. Legislative Framework",
    question: "Which lawful basis is NOT available to public authorities performing their tasks?",
    options: [
      "Legal obligation",
      "Public interest / official authority",
      "Legitimate interests",
      "Contract"
    ],
    answer: 2,
    explanation: "Art. 6(1)(f) is unavailable to public authorities in the performance of their tasks; they should rely on (c) or (e)."
  },
  {
    id: "q-010",
    domain: "III. Legislative Framework",
    question: "A controller must respond to a Subject Access Request within:",
    options: [
      "72 hours",
      "One month, extendable by two further months for complex requests",
      "Three working days",
      "Six months"
    ],
    answer: 1,
    explanation: "Art. 12(3): one month, extendable by two further months considering complexity and number of requests; the data subject must be informed of any extension."
  },
  {
    id: "q-011",
    domain: "III. Legislative Framework",
    question: "The right to data portability applies where processing is based on:",
    options: [
      "Any lawful basis, as long as data is electronic",
      "Consent or contract AND carried out by automated means",
      "Legitimate interests of the controller",
      "Public interest"
    ],
    answer: 1,
    explanation: "Art. 20 limits portability to consent/contract bases AND automated processing."
  },
  {
    id: "q-012",
    domain: "III. Legislative Framework",
    question: "Article 22 protects data subjects from:",
    options: [
      "Any automated processing",
      "Decisions based solely on automated processing producing legal or similarly significant effects",
      "Profiling for analytics",
      "Sharing data with processors"
    ],
    answer: 1,
    explanation: "Three cumulative conditions: solely automated, decision, and legal/similarly significant effect."
  },
  {
    id: "q-013",
    domain: "III. Legislative Framework",
    question: "A controller must notify the supervisory authority of a personal data breach:",
    options: [
      "Always, within 24 hours",
      "Without undue delay and where feasible within 72 hours, unless unlikely to result in a risk to rights and freedoms",
      "Only if encryption was broken",
      "Within 30 days, in all cases"
    ],
    answer: 1,
    explanation: "Art. 33(1). No notice is required where the breach is unlikely to result in a risk to rights and freedoms."
  },
  {
    id: "q-014",
    domain: "III. Legislative Framework",
    question: "Data subjects must be informed of a breach when:",
    options: [
      "It involves more than 1,000 records",
      "It is likely to result in a HIGH risk to rights and freedoms",
      "Any time the supervisory authority is notified",
      "Only if media coverage is expected"
    ],
    answer: 1,
    explanation: "Art. 34 triggers when the risk to data subjects is HIGH; exceptions include encryption that rendered data unintelligible, subsequent measures eliminating risk, or disproportionate effort (then public communication)."
  },
  {
    id: "q-015",
    domain: "III. Legislative Framework",
    question: "The higher tier of GDPR administrative fines is:",
    options: [
      "€10 million or 2% of worldwide annual turnover",
      "€20 million or 4% of worldwide annual turnover",
      "€50 million flat",
      "Three times the unlawful gain"
    ],
    answer: 1,
    explanation: "Art. 83(5). The figure used is the higher of €20M or 4% of total worldwide annual turnover of the preceding financial year."
  },
  {
    id: "q-016",
    domain: "III. Legislative Framework",
    question: "Which is NOT a mandatory clause in an Art. 28 controller–processor contract?",
    options: [
      "Processor to process only on documented instructions",
      "Confidentiality commitment from staff",
      "Mandatory ISO 27001 certification of the processor",
      "Assistance to the controller in responding to data subject requests"
    ],
    answer: 2,
    explanation: "ISO 27001 is not mandated by the GDPR. The other three are explicitly required by Art. 28(3)."
  },
  {
    id: "q-017",
    domain: "III. Legislative Framework",
    question: "A DPO must be designated when:",
    options: [
      "The organisation has more than 250 employees",
      "Core activities require regular and systematic monitoring of data subjects on a large scale",
      "The organisation uses any cloud services",
      "The organisation processes data on more than 5,000 EU residents annually"
    ],
    answer: 1,
    explanation: "Art. 37(1)(b). Other triggers: public authority, or large-scale processing of special/criminal data."
  },
  {
    id: "q-018",
    domain: "III. Legislative Framework",
    question: "Pseudonymised data is:",
    options: [
      "No longer personal data",
      "Personal data, subject to GDPR",
      "Outside scope of Chapter V transfers",
      "Always anonymous"
    ],
    answer: 1,
    explanation: "Pseudonymised data remains personal data because re-identification is possible with the additional information."
  },
  {
    id: "q-019",
    domain: "III. Legislative Framework",
    question: "Under ePrivacy, storing or accessing information on a user's terminal equipment (cookies) generally requires:",
    options: [
      "Legitimate interests assessment only",
      "Prior consent, except for strictly necessary cookies",
      "Notification to the supervisory authority",
      "Anonymisation of the cookie value"
    ],
    answer: 1,
    explanation: "Art. 5(3) ePrivacy. 'Strictly necessary' (e.g. session, load-balancing, user-input cookies) and certain communication cookies are exempt."
  },
  {
    id: "q-020",
    domain: "III. Legislative Framework",
    question: "The CJEU's Planet49 judgment established that:",
    options: [
      "Pre-ticked checkboxes are valid consent",
      "Cookie banners must be in English",
      "Consent for non-essential cookies requires a clear affirmative act; pre-ticked boxes do not suffice",
      "Soft opt-in extends to all online marketing"
    ],
    answer: 2,
    explanation: "Planet49 (C-673/17, 2019) confirmed that pre-ticked boxes do not constitute valid consent under either ePrivacy or GDPR."
  },
  {
    id: "q-021",
    domain: "III. Legislative Framework",
    question: "Which directive governs processing by competent authorities for criminal law enforcement?",
    options: [
      "ePrivacy Directive (2002/58/EC)",
      "Law Enforcement Directive (2016/680)",
      "NIS2 Directive (2022/2555)",
      "Whistleblower Directive (2019/1937)"
    ],
    answer: 1,
    explanation: "The LED applies to processing for the prevention, investigation, detection or prosecution of criminal offences. It sits alongside the GDPR."
  },
  {
    id: "q-022",
    domain: "III. Legislative Framework",
    question: "For an information-society service offered to a child relying on consent under GDPR, the default minimum age is:",
    options: [
      "13",
      "14",
      "16",
      "18"
    ],
    answer: 2,
    explanation: "Art. 8: 16, with Member States permitted to lower to 13."
  },
  {
    id: "q-023",
    domain: "III. Legislative Framework",
    question: "Joint controllership requires:",
    options: [
      "Equal shares of liability in all cases",
      "A transparent arrangement defining responsibilities and an essence available to data subjects",
      "Approval by the supervisory authority",
      "Identical purposes only"
    ],
    answer: 1,
    explanation: "Art. 26 — joint controllers determine purposes and means jointly and must agree responsibilities transparently; data subjects can exercise rights against either."
  },
  {
    id: "q-024",
    domain: "III. Legislative Framework",
    question: "A DPIA is most clearly required when:",
    options: [
      "An HR system stores employee names and emails",
      "A controller deploys large-scale systematic monitoring of a publicly accessible area",
      "A small newsletter mailing list is migrated to a new provider",
      "A new logo is added to the website"
    ],
    answer: 1,
    explanation: "Art. 35(3)(c) explicitly cites large-scale systematic monitoring of publicly accessible areas."
  },
  {
    id: "q-025",
    domain: "III. Legislative Framework",
    question: "The right to object under Art. 21(2) (direct marketing) is:",
    options: [
      "Conditional on demonstrating distress",
      "Absolute — processing must stop on request",
      "Available only against electronic marketing",
      "Limited to natural persons over 18"
    ],
    answer: 1,
    explanation: "The right to object to processing for direct marketing is absolute and unconditional."
  },
  {
    id: "q-026",
    domain: "III. Legislative Framework",
    question: "Records of processing activities under Art. 30 are typically NOT required when:",
    options: [
      "The organisation processes data only on paper",
      "The organisation has fewer than 250 employees AND processing is occasional, not high-risk, and excludes special/criminal data",
      "The DPO is appointed",
      "The organisation is established outside the EU"
    ],
    answer: 1,
    explanation: "Art. 30(5) provides a cumulative exemption; all conditions must apply together. In practice, very few organisations qualify."
  },
  {
    id: "q-027",
    domain: "IV. Compliance",
    question: "An employer wishes to rely on employee consent to monitor company laptops. The best assessment is:",
    options: [
      "Consent is the strongest basis here",
      "Consent is rarely valid in employment due to imbalance of power; legitimate interests with strong safeguards is usually more appropriate",
      "Public interest is the right basis",
      "Vital interests applies"
    ],
    answer: 1,
    explanation: "EDPB and Article 29 WP guidance state consent is rarely 'freely given' in the employment context."
  },
  {
    id: "q-028",
    domain: "IV. Compliance",
    question: "A 'soft opt-in' for direct electronic marketing requires:",
    options: [
      "Contact details obtained in the context of a sale or negotiations, similar products/services, and a clear easy opt-out at collection and in every message",
      "Written postal confirmation",
      "A supervisory authority filing",
      "A double opt-in confirmation email"
    ],
    answer: 0,
    explanation: "All three conditions in Art. 13(2) ePrivacy must be met cumulatively for the soft opt-in to apply."
  },
  {
    id: "q-029",
    domain: "IV. Compliance",
    question: "Which is a valid technical supplementary measure following Schrems II?",
    options: [
      "Promising in a contract not to disclose data to governments",
      "Strong end-to-end encryption with keys held only in the EEA, where the importer cannot access plaintext",
      "Asking the importer to publish a transparency report",
      "Restricting access to certain employees only"
    ],
    answer: 1,
    explanation: "EDPB Recommendations 01/2020 emphasise that technical measures are critical where third-country law gives authorities access; contractual/organisational measures alone are insufficient in that scenario."
  },
  {
    id: "q-030",
    domain: "IV. Compliance",
    question: "Which is true of legitimate interests as a lawful basis?",
    options: [
      "It always overrides data subject objections",
      "It requires a three-part test: purpose, necessity, balancing",
      "It applies only to commercial businesses",
      "It removes the need to inform data subjects"
    ],
    answer: 1,
    explanation: "Art. 6(1)(f) plus Recital 47 — controllers must document the test and inform data subjects of the legitimate interests pursued."
  },
  {
    id: "q-031",
    domain: "IV. Compliance",
    question: "The DPO may also perform which of the following without conflict of interest?",
    options: [
      "Head of IT determining security measures",
      "Head of Marketing setting profiling purposes",
      "Internal training and awareness advisor (independent of decisions on purposes/means)",
      "CEO of the controller"
    ],
    answer: 2,
    explanation: "EDPB guidance and CJEU case law: a DPO must not also determine the purposes and means of processing, so most senior business roles create a conflict."
  },
  {
    id: "q-032",
    domain: "IV. Compliance",
    question: "Under GDPR, a processor that engages a sub-processor without prior authorisation is:",
    options: [
      "Always considered a joint controller",
      "In breach of Art. 28 and may incur direct liability",
      "Allowed if the sub-processor is in the EU",
      "Exempt because controllers carry all liability"
    ],
    answer: 1,
    explanation: "Art. 28(2) requires prior specific or general written authorisation, and Art. 28(10) deems an excess of instructions to make the processor a controller for that processing."
  },
  {
    id: "q-033",
    domain: "IV. Compliance",
    question: "Which is the best statement about anonymisation?",
    options: [
      "Removing names is enough to anonymise data",
      "Truly anonymous data is outside the scope of GDPR; the standard is irreversible non-identifiability accounting for reasonably likely re-identification",
      "Anonymisation is the same as pseudonymisation",
      "Anonymisation requires SA approval"
    ],
    answer: 1,
    explanation: "Recital 26 and Article 29 WP Opinion 05/2014 set out the high threshold and the singling-out / linkability / inference tests."
  },
  {
    id: "q-034",
    domain: "IV. Compliance",
    question: "When working with a vendor located in a country WITHOUT an adequacy decision, the BEST course is to:",
    options: [
      "Stop all processing until adequacy is granted",
      "Implement an Art. 46 safeguard (e.g. SCCs) and conduct a Transfer Impact Assessment, adding supplementary measures as needed",
      "Anonymise all data before sending",
      "Rely on Art. 49 derogations as a long-term solution"
    ],
    answer: 1,
    explanation: "Art. 49 derogations are exceptional and must not be relied upon for repetitive transfers; SCCs + TIA + supplementary measures is the post-Schrems II model."
  },
  {
    id: "q-035",
    domain: "V. International Data Transfers",
    question: "Which mechanism BEST suits intra-group transfers within a multinational?",
    options: [
      "Adequacy decision",
      "Standard Contractual Clauses",
      "Binding Corporate Rules",
      "Art. 49 derogations"
    ],
    answer: 2,
    explanation: "BCRs are tailored to intra-group transfers and are approved by the lead SA via the consistency mechanism (Art. 47)."
  },
  {
    id: "q-036",
    domain: "V. International Data Transfers",
    question: "Schrems II (C-311/18) ruled that:",
    options: [
      "SCCs are invalid for all transfers",
      "The EU–US Privacy Shield is invalid; SCCs remain valid but require case-by-case assessment of the third country's law and supplementary measures where needed",
      "BCRs are no longer permitted",
      "Adequacy decisions are no longer required"
    ],
    answer: 1,
    explanation: "The Court invalidated Privacy Shield but upheld SCCs subject to TIAs and supplementary measures."
  },
  {
    id: "q-037",
    domain: "V. International Data Transfers",
    question: "Which is NOT a derogation under Article 49?",
    options: [
      "Explicit consent informed of risks",
      "Performance of a contract with the data subject",
      "Compelling legitimate interests as a routine business transfer",
      "Important reasons of public interest recognised in EU/MS law"
    ],
    answer: 2,
    explanation: "The 'compelling legitimate interests' derogation is narrow, non-repetitive, limited to a small number of data subjects, and requires SA notification — not for routine transfers."
  },
  {
    id: "q-038",
    domain: "V. International Data Transfers",
    question: "Which transfer mechanism does NOT require additional case-by-case assessment of the destination country's surveillance laws?",
    options: [
      "Standard Contractual Clauses",
      "Binding Corporate Rules",
      "An adequacy decision in force",
      "Ad hoc contractual clauses approved by an SA"
    ],
    answer: 2,
    explanation: "An adequacy decision means the Commission has already found essential equivalence; transfers proceed without further safeguard work (though it can be challenged or withdrawn)."
  },
  {
    id: "q-039",
    domain: "V. International Data Transfers",
    question: "A remote support engineer in India views customer records held on EU servers. This is:",
    options: [
      "Not a transfer because data remains in the EU",
      "A transfer to a third country requiring an Art. 46 safeguard or other Chapter V mechanism",
      "Always lawful under Art. 6(1)(b)",
      "Permitted under the household exemption"
    ],
    answer: 1,
    explanation: "Remote access from a third country constitutes a transfer; Chapter V applies regardless of physical data location."
  },
  {
    id: "q-040",
    domain: "V. International Data Transfers",
    question: "The EU–US Data Privacy Framework (DPF), adopted in July 2023:",
    options: [
      "Reinstates Safe Harbor",
      "Provides an adequacy decision for US recipients certified to the DPF Principles, with Executive Order 14086 and the Data Protection Review Court as US-side safeguards",
      "Replaces SCCs entirely",
      "Applies to all US transfers automatically without certification"
    ],
    answer: 1,
    explanation: "Coverage requires recipient self-certification with the US Department of Commerce; non-certified recipients still need SCCs/BCRs."
  },
  {
    id: "q-041",
    domain: "VI. Topical Issues",
    question: "Which CJEU case established the so-called 'right to be forgotten' against search engines?",
    options: [
      "Schrems I",
      "Google Spain (C-131/12)",
      "Digital Rights Ireland",
      "Lindqvist"
    ],
    answer: 1,
    explanation: "Google Spain (2014) held that search engines are controllers and that delisting could be required in certain conditions."
  },
  {
    id: "q-042",
    domain: "VI. Topical Issues",
    question: "Which is true about the household exemption under Art. 2(2)(c)?",
    options: [
      "It always covers social media posts",
      "It does not apply where personal data is made accessible to an indefinite number of people online",
      "It exempts CCTV that records public areas",
      "It applies to small businesses processing on a personal computer"
    ],
    answer: 1,
    explanation: "Lindqvist established that publishing personal data to the open internet is outside the household exemption; Ryneš confirmed that CCTV covering public space is also outside it."
  },
  {
    id: "q-043",
    domain: "VI. Topical Issues",
    question: "Under the EU Whistleblower Directive (2019/1937), reporting channels must:",
    options: [
      "Always disclose the reporter's identity to the accused",
      "Maintain confidentiality of the reporter's identity, with limited exceptions defined by law",
      "Be operated only by the supervisory authority",
      "Use blockchain technology"
    ],
    answer: 1,
    explanation: "Confidentiality of the reporting person's identity is a core principle of the Directive."
  },
  {
    id: "q-044",
    domain: "III. Legislative Framework",
    question: "Which statement BEST captures the relationship between GDPR and ePrivacy?",
    options: [
      "ePrivacy replaces GDPR in the electronic communications sector",
      "ePrivacy is lex specialis to GDPR for electronic communications and terminal equipment",
      "ePrivacy applies only to telecoms operators",
      "The two are mutually exclusive"
    ],
    answer: 1,
    explanation: "ePrivacy particularises rules for the e-comms sector; GDPR fills the gaps for general processing."
  },
  {
    id: "q-045",
    domain: "III. Legislative Framework",
    question: "A controller engages a payment processor. The payment processor decides which fraud-prevention checks to run on the transaction data for its own risk purposes. The payment processor is:",
    options: [
      "Always a processor",
      "A controller for the fraud-prevention purposes (and possibly a joint controller for shared purposes)",
      "A sub-processor of the merchant",
      "Outside the scope of GDPR"
    ],
    answer: 1,
    explanation: "Determining purposes and means makes one a controller. EDPB Guidelines 07/2020 on controller/processor concepts treat fraud-prevention purposes set by the processor as controller activities."
  },
  {
    id: "q-046",
    domain: "IV. Compliance",
    question: "Which is the BEST practice for handling data subject access requests at scale?",
    options: [
      "Refuse all requests as manifestly excessive",
      "Verify identity proportionately, log requests, search relevant systems, redact third-party data, and respond within one month",
      "Always charge a fee",
      "Always extend by three months by default"
    ],
    answer: 1,
    explanation: "Art. 12 sets transparency, proportionate identity checks, and timelines; redactions protect third-party rights."
  },
  {
    id: "q-047",
    domain: "IV. Compliance",
    question: "A DPIA must include:",
    options: [
      "A description of processing and purposes, necessity and proportionality assessment, risks to data subjects, and measures to address those risks",
      "Only a list of personal data fields",
      "A list of vendors only",
      "The signature of the data subject"
    ],
    answer: 0,
    explanation: "Art. 35(7) sets out the minimum DPIA content."
  },
  {
    id: "q-048",
    domain: "III. Legislative Framework",
    question: "Which Article requires controllers to demonstrate compliance with the GDPR principles?",
    options: [
      "Art. 5(1) — Principles",
      "Art. 5(2) — Accountability",
      "Art. 24 — Responsibility of the controller",
      "Both (b) and (c)"
    ],
    answer: 3,
    explanation: "Art. 5(2) imposes accountability and Art. 24 operationalises it — both require demonstrable compliance."
  },
  {
    id: "q-049",
    domain: "III. Legislative Framework",
    question: "A controller relying on legitimate interests must, in its transparency notice:",
    options: [
      "Identify the legitimate interest being pursued",
      "Publish the full balancing test",
      "Obtain SA approval first",
      "Only mention the lawful basis name"
    ],
    answer: 0,
    explanation: "Arts. 13(1)(d)/14(2)(b) require identification of the legitimate interests pursued; the LIA itself should be documented internally."
  },
  {
    id: "q-050",
    domain: "V. International Data Transfers",
    question: "Which is true of onward transfers under SCCs?",
    options: [
      "Onward transfers are unrestricted once SCCs are signed",
      "Onward transfers must also comply with Chapter V (e.g. through onward transfer clauses in the SCCs)",
      "Onward transfers require Commission approval each time",
      "SCCs prohibit onward transfers entirely"
    ],
    answer: 1,
    explanation: "The 2021 SCCs include detailed onward-transfer obligations that must be respected; Chapter V applies throughout the chain."
  },
  {
    id: "q-051",
    domain: "III. Legislative Framework",
    question: "Storing CCTV footage of staff for 90 days where 30 days would suffice for security purposes likely violates which principle most directly?",
    options: [
      "Purpose limitation",
      "Storage limitation",
      "Lawfulness",
      "Integrity and confidentiality"
    ],
    answer: 1,
    explanation: "Storage limitation requires that data be kept no longer than necessary for the purposes for which it is processed."
  },
  {
    id: "q-052",
    domain: "III. Legislative Framework",
    question: "Which statement about Article 14 (data not obtained from the data subject) is TRUE?",
    options: [
      "Information must be provided within 72 hours of receipt",
      "Information must be provided within a reasonable period and at the latest within one month, or sooner if used to communicate or disclose",
      "No information is needed if data comes from a public source",
      "The data subject must always be paid to receive notice"
    ],
    answer: 1,
    explanation: "Art. 14(3) sets the timelines. Exceptions include disproportionate effort (especially for research/statistics) with compensating safeguards."
  },
  {
    id: "q-053",
    domain: "IV. Compliance",
    question: "A controller wishes to use a cloud CRM hosted in the EEA by a US parent company. The MOST important transfer consideration is:",
    options: [
      "Whether the EEA subsidiary's parent can access EU data remotely from the US, triggering Chapter V",
      "Whether the CRM uses HTTPS",
      "The CRM's price",
      "The number of users"
    ],
    answer: 0,
    explanation: "EU storage alone is not enough — remote access by non-EEA staff (or compulsion via foreign law) is a transfer; assess and document accordingly."
  },
  {
    id: "q-054",
    domain: "III. Legislative Framework",
    question: "Which best describes 'profiling' under GDPR?",
    options: [
      "Any analysis of data",
      "Any form of automated processing of personal data evaluating personal aspects of a natural person, in particular to analyse or predict performance, economic situation, health, preferences, behaviour, location, movements, etc.",
      "Manual segmentation by marketing teams",
      "Aggregated statistical reporting"
    ],
    answer: 1,
    explanation: "Art. 4(4) defines profiling. Solely automated profiling with legal/similarly significant effects is restricted under Art. 22."
  },
  {
    id: "q-055",
    domain: "III. Legislative Framework",
    question: "Under Art. 17, a controller can refuse erasure where processing is necessary for:",
    options: [
      "Exercising freedom of expression and information",
      "Compliance with a legal obligation",
      "Establishment, exercise or defence of legal claims",
      "All of the above"
    ],
    answer: 3,
    explanation: "Art. 17(3) lists these and other exceptions (public interest in public health, archiving/research/statistics with safeguards)."
  },
  {
    id: "q-056",
    domain: "II. European Regulatory Institutions",
    question: "Which body adopts adequacy decisions for third countries?",
    options: [
      "European Parliament",
      "Council of the EU",
      "European Commission",
      "EDPB"
    ],
    answer: 2,
    explanation: "Adequacy decisions are adopted by the European Commission as implementing acts; the EDPB issues opinions during the process."
  },
  {
    id: "q-057",
    domain: "I. Introduction to European Data Protection",
    question: "Which of the following is NOT one of the OECD privacy principles?",
    options: [
      "Use limitation",
      "Purpose specification",
      "Adequacy of cross-border transfer",
      "Individual participation"
    ],
    answer: 2,
    explanation: "'Adequacy of cross-border transfer' is a concept in EU law, not in the original OECD principles."
  },
  {
    id: "q-058",
    domain: "III. Legislative Framework",
    question: "Which is the BEST example of a 'data minimisation' practice?",
    options: [
      "Storing customer data for as long as possible 'just in case'",
      "Collecting only the fields strictly needed for the stated purpose",
      "Encrypting backups",
      "Pseudonymising data after collection"
    ],
    answer: 1,
    explanation: "Minimisation focuses on adequate, relevant and limited to what is necessary — collection-time discipline."
  },
  {
    id: "q-059",
    domain: "IV. Compliance",
    question: "When designing a new product, applying 'privacy by default' means:",
    options: [
      "The most permissive settings are enabled at start-up",
      "Only personal data necessary for the specific purpose is processed by default (amount, extent, storage, accessibility)",
      "Users must opt-out to share less data",
      "All data is encrypted at rest"
    ],
    answer: 1,
    explanation: "Art. 25(2). The default configuration must be the least intrusive."
  },
  {
    id: "q-060",
    domain: "VI. Topical Issues",
    question: "After Brexit, the legal framework in the UK is BEST described as:",
    options: [
      "GDPR no longer applies in any form",
      "UK GDPR plus the Data Protection Act 2018, with an EU adequacy decision currently in force",
      "Only the ECHR applies",
      "The UK is bound by EU GDPR as a member state"
    ],
    answer: 1,
    explanation: "UK GDPR + DPA 2018 mirror EU GDPR closely. The Commission's UK adequacy decision is currently in force and subject to periodic review."
  }
];
