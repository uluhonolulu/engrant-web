import React from 'react';
import '../styles/shared.css';
import Header from '../components/ngo-search/Header';
import Footer from '../components/Footer';
import PromptCard from '../components/prompt-library/PromptCard';

const PromptLibraryPage = () => {
  // Prompt content embedded directly
  const prompt1Content = `# Research Request

Please conduct comprehensive grant-optimized research on the organization "<INSERT ORGANIZATION NAME>" with website: <INSERT WEBSITE>.


# Research Aspects

Research ALL of the following aspects systematically and provide detailed analysis:

## Aspect 1: Core Organization Profile

CORE ORGANIZATION PROFILE:
- Full legal name and any acronyms/abbreviations used
- Mission, vision, values, and strategic objectives
- Core programs, services, and activities
- Leadership structure (board, executives, key personnel)
- Legal registration type (NGO, foundation, private company, cooperative, etc.)
- Year established/founded
- All registration numbers, tax IDs, VAT numbers (including 501(c)(3) if US-based)
- Accreditations and quality certifications

## Aspect 2: Niche Characteristics (CRITICAL)

NICHE CHARACTERISTICS & SPECIALIZED IDENTITY (CRITICAL FOR GRANT DISCOVERY):
- **Specialized sector/cause identity** (e.g., "Jewish heritage", "LGBTQ+ rights", "ocean conservation", "Indigenous education")
- **Community-specific focus** (ethnic, religious, cultural, linguistic minorities)
- **Population-specific specialization** (survivors of specific crises, specific diaspora groups, particular disability communities)
- **Unique methodological approach** (e.g., "art therapy for refugees", "peer-to-peer mentoring", "restorative justice")
- **First-of-kind status** in region or for population served
- Any characteristics that make this organization part of a specialized funding ecosystem
- Keywords and terminology this specialized sector uses (e.g., "Shoah documentation" vs "Holocaust education")

## Aspect 3: Peer Organization Ecosystem

PEER ORGANIZATION ECOSYSTEM:
- Identify 5-10 similar organizations (same sector, geography, population served)
- Organizations this org references as peers, partners, or models
- Organizations that serve similar populations in neighboring countries/regions
- Organizations in the same specialized funding ecosystem
- For each peer: name, location, website, and known funders if visible

## Aspect 4: Operational Languages

OPERATIONAL LANGUAGES & LOCALIZATION:
- Languages used for instruction/service delivery (with percentages)
- Administrative/operational languages
- Staff language capabilities
- **CRITICAL: Local language grant search terms** for BOTH:
  * Generic grant terms (e.g., Montenegro: "fondovi", "dotacije", "bespovratna sredstva")
  * Specialized sector terms in local language (e.g., if Jewish heritage org in Poland: "fundacje żydowskie", "dziedzictwo żydowskie")
- Translation capacity for international applications

## Aspect 5: Geographic Political Context

GEOGRAPHIC & POLITICAL CONTEXT WITH HIERARCHY:
- **Specific location**: City/municipality, region/state, country
- **Geographic hierarchy** for grant searches:
  * Most specific: City name, specific region
  * Medium specificity: Country name, sub-region (e.g., "Western Balkans", "New England")
  * Broader region: Multi-country region (e.g., "Central & Eastern Europe", "Southeast Asia", "Latin America")
  * Widest: Continental (e.g., "Europe", "Africa", "Americas")
- **EU/International status**:
  * If in Europe: EU member / EU candidate / Potential candidate / Eastern Partnership / European neighborhood / Third country
  * If in US: State, tribal land status, US territory
  * If elsewhere: Regional bloc membership (ASEAN, MERCOSUR, African Union, etc.)
- **Bilateral cooperation**: Which countries have development agreements, sister city relationships, or cultural exchange programs with this location
- **Diaspora connections**: Which countries have significant diaspora communities from this location
- **Regional initiatives**: Participation in regional programs (e.g., V4, WB6, Three Seas Initiative, Nordic Council)

## Aspect 6: Size Capacity Indicators

SIZE & CAPACITY INDICATORS:
- EXACT employee count (full-time, part-time, volunteers separately)
- Annual revenue/budget (specific amount with currency and year)
- Revenue breakdown by source (% grants, donations, fees, government, etc.)
- Physical infrastructure (owned/rented facilities, equipment value)
- Digital infrastructure and capabilities
- Financial management capacity (audited accounts, financial software)
- Project management track record
- **Largest grant received** (amount and source - indicates realistic grant size)
- **Typical grant range** (based on past grants received)

## Aspect 7: Special Circumstances

SPECIAL CIRCUMSTANCES & UNIQUE POSITIONING:
- Crisis response involvement (refugees, natural disasters, pandemic)
- Support for displaced/exile populations (specify which populations)
- **Minority group focus** (which specific minority groups)
- **Minority-led status** (led by members of which minority)
- First-of-kind or innovative approaches in the region
- Gender composition of leadership and staff (% women in leadership)
- Disability inclusion practices (disability-focused or disability-led)
- Youth-led initiatives (average age of leadership, under-35 leadership)
- Environmental/climate action focus
- **Faith-based or faith-affiliated** (which tradition, level of affiliation)
- **Indigenous-led or Indigenous-serving**
- **Survivor-led** (led by people with lived experience of the issue addressed)
- Any unique circumstances that open special funding streams

## Aspect 8: Sectoral Classification

SECTORAL CLASSIFICATION & CROSS-SECTOR POTENTIAL:
- **Primary specialized sector** (be as specific as possible - not just "culture" but "Jewish cultural heritage preservation")
- **Broader sector categories** this org fits into (for general funders)
- ISCED, NACE, NTEE, or other standard classification codes (depending on country)
- **Secondary sectors** where the organization could qualify for funding
- **Cross-cutting themes** (gender equality, social inclusion, digitalization, green transition, youth participation, intercultural dialogue)
- Innovation and pilot project potential
- Scalability and replication potential
- **Specialized terminology** this sector uses (e.g., Holocaust education sector says "Shoah", "remembrance", "testimony")

## Aspect 9: Funding Landscape (CRITICAL)

FUNDING LANDSCAPE MAPPING (DETAILED):
- **Previous grants received** - for EACH grant found:
  * Funder name (full name of foundation/program)
  * Program name (specific program or fund within the funder)
  * Amount (in original currency and approximate USD/EUR)
  * Year received
  * Project title/purpose
- **Current donor relationships** (active funders)
- **Funder types that have supported this org**:
  * Specialized sector foundations (e.g., Jewish heritage foundations, environmental foundations)
  * Regional/geographic funders (EU programs, regional development funds)
  * Bilateral development agencies (USAID, GIZ, SDC, etc.)
  * Community foundations
  * Corporate foundations
  * Government ministries
  * Embassy programs
  * International organizations (UN agencies, Council of Europe, OSCE)
- **Known applicable funding programs**:
  * EU programs (Erasmus+, Horizon, CERV, Creative Europe, LIFE, etc.) - specify which strands
  * US government programs (NEH, NEA, State Dept, USAID) if applicable
  * Regional development funds
  * National grant schemes
  * Local/municipal funding
- **Specialized sector funders** in this field (e.g., if Jewish heritage org: Claims Conference, Rothschild Foundation, JDC, local Jewish foundations)
- Development banks and IFIs (World Bank, EBRD, EIB, IDB, ADB, etc.)

## Aspect 10: Grant Readiness

GRANT READINESS ASSESSMENT:
- Match funding capacity (maximum % they can provide)
- Consortium/partnership experience and existing network of partners
- **Previous EU funding experience** (which programs, when, success rate)
- **Previous US government funding experience** if applicable
- Audit readiness and compliance systems
- M&E systems and impact measurement capacity
- Reporting capabilities and track record
- Pre-financing capacity (can they wait for reimbursements)
- Experience with different grant sizes (micro-grants, medium, large)

## Aspect 11: Current Needs

CURRENT NEEDS & STRATEGIC PRIORITIES:
- Explicitly stated funding needs (quotes from website/reports)
- Infrastructure and equipment requirements
- Capacity building and training needs
- Geographic or programmatic expansion plans
- Digital transformation needs
- Sustainability and long-term financing goals
- **Specific projects seeking funding** (if mentioned)
- **Funding priorities from additional context** (if provided by the organization - extract all funding priorities, focus areas, and grant-seeking objectives mentioned in the additional context)
- **Funding exclusions from additional context** (if provided - extract any explicit exclusions, restrictions, or "we don't accept" statements, such as "we don't take federal grants", "no government funding", "exclude corporate sponsorships", etc.)

## Aspect 12: Eligibility Flags

ELIGIBILITY FLAGS & SPECIAL CATEGORIES:
- Women-led organization (>50% women in leadership)
- Minority-led (which minority group)
- Minority-serving (which minority groups)
- Youth-led (leadership under 30 or under 35)
- Disability-focused or disability-led
- Faith-based or faith-affiliated (which tradition)
- For-profit or non-profit status
- Social enterprise or cooperative
- Academic institution (if yes, public or private)
- Think tank or research institution
- Grassroots organization (community-led, volunteer-driven)
- **Indigenous-led or Indigenous-serving**
- **Survivor-led or peer-led**
- **Registered charity status** (in which jurisdictions)
- **501(c)(3) status** if US-based
- Any sanctions, restrictions, or blacklists

# Research Instructions

CRITICAL RESEARCH INSTRUCTIONS:
- Search in MULTIPLE LANGUAGES (organization's local language + English)
- Check business registries (e.g., companywall.me, local registries, charity commission websites)
- Search for annual reports and financial statements
- Look for news articles mentioning grants received
- Find organization profiles on funder websites (search "[org name] funder" or "[org name] supported by")
- **SEARCH FOR PEER ORGANIZATIONS** and check their funder lists
- Search in specialized sector databases (e.g., Jewish heritage orgs can be in Jewish federation databases)
- Check social media for recent activities, partnerships, and grant acknowledgments
- Look for evaluation reports or impact assessments
- Search government databases and gazette notices
- Check if org is member of networks/umbrellas (which ones, what do they provide access to)

# Output Format

Return findings in this enhanced Markdown format, replace sample values with actual values or omit sections if not found:

## Basic Information

- **Name**: Full legal name
- **Acronym**: Short name or abbreviation
- **Website**: Primary website URL
- **Mission**: Mission statement
- **Vision**: Vision statement
- **Values**: 
  - Value 1
  - Value 2
- **Objectives**:
  - Objective 1
  - Objective 2

## Niche Identity

- **Specialized Sector**: Primary specialized sector/cause (e.g., "Jewish heritage preservation", "LGBTQ+ youth advocacy")
- **Community Focus**:
  - Specific community 1
  - Specific community 2
- **Unique Approach**: Unique methodological or programmatic approach
- **Specialized Terminology**:
  - Term 1 this sector uses
  - Term 2
  - Term 3
- **Is First of Kind**: Yes/No/Unknown
- **Funding Ecosystem**: Name of specialized funding ecosystem (e.g., "Jewish philanthropy", "ocean conservation funders")

## Peer Organizations

For each peer organization:

- **Name**: Peer org name
- **Location**: City, Country
- **Website**: URL
- **Known Funders**:
  - Funder 1
  - Funder 2
- **Similarity**: Why this is a good peer comparison

---

## Programs and Services

- **Programs**:
  - Program 1
  - Program 2
- **Services**:
  - Service 1
  - Service 2

## Leadership

- **Board Size**: Number
- **Board Chair**: Name
- **Executive Director**: Name
- **Key Personnel**:
  - Person 1
  - Person 2

## Size and Financials

- **Size**: Micro/Small/Medium/Large
- **Employee Count**: Exact number with breakdown
- **Annual Revenue**: Specific amount with currency
- **Revenue Sources**:
  - Grants: percentage or amount
  - Donations: percentage or amount
  - Fees: percentage or amount
  - Government: percentage or amount
  - Other: percentage or amount
- **Grant Size Range**:
  - Typical Minimum: Smallest grant typically received
  - Typical Maximum: Largest grant received
  - Average Grant: Average grant size

## Legal and Registration

- **Year Founded**: Number
- **Legal Status**: Specific registration type
- **Registration Numbers**:
  - National ID: number
  - Tax ID: number
  - VAT: number if applicable
  - EIN 501(c)(3): number if US nonprofit
  - Charity Number: if registered charity
  - Other: any other relevant numbers

## Languages

- **Primary Service Languages**:
  - Language 1
  - Language 2
- **Operational Languages**:
  - Language 1
  - Language 2
  - Language 3
- **Grant Search Terms**:
  - Generic Local: generic grant term 1 in local language, term 2
  - Specialized Local: specialized sector term 1 in local language, term 2
  - Generic English: grant, funding, foundation, support
  - Specialized English: specialized term 1, specialized term 2

## Geographic Context

- **City**: City/Municipality
- **Region/State**: Region/State/Province
- **Country**: Primary country
- **Geographic Hierarchy**:
  - Specific: City or specific region
  - Medium: Country, Sub-region name (e.g., Western Balkans)
  - Broad: Multi-country region (e.g., Central & Eastern Europe), Broader region
  - Continental: Europe/Asia/Africa/Americas/Oceania
- **EU Status**: EU member/candidate/associated/partnership/third (or N/A if not in Europe)
- **US Status**: State name, territory status (or N/A if not in US)
- **Regional Blocs**:
  - Regional organization 1
  - Regional organization 2
- **Service Areas**:
  - Geographic area 1
  - Geographic area 2
- **International Reach**:
  - Country 1
  - Country 2
- **Bilateral Donors**:
  - Donor country 1
  - Donor country 2
- **Diaspora Connections**:
  - Country with diaspora 1
  - Country 2

## Classifications

- **Primary Sector**: Most specific sector description
- **Broader Sectors**:
  - Broader sector 1
  - Broader sector 2
- **Secondary Sectors**:
  - Secondary sector 1
  - Secondary sector 2
- **ISCED Code**: Education level code if applicable
- **NACE Code**: Economic activity code (EU)
- **NTEE Code**: NTEE code if US-based
- **Cross-Cutting Themes**:
  - Theme 1
  - Theme 2
- **Innovation Potential**: Description of innovation/pilot potential

## Special Circumstances

- **Refugee Support**: Yes/No or which populations
- **Crisis Response**: Yes/No or which crises
- **Minority Serving**:
  - Minority group 1
  - Minority group 2
- **Minority Led**: Which minority group leads this org
- **Indigenous Led**: Yes/No
- **Indigenous Serving**: Yes/No
- **Survivor Led**: Yes/No or survivors of what
- **First in Region**: Yes/No or first to do what
- **Innovative Approach**: Description
- **Faith Based**: Which tradition and level of affiliation
- **Other Special**:
  - Special aspect 1
  - Special aspect 2

## Capacity Indicators

- **Match Funding Capacity**: percentage or description
- **Project Management Experience**: level description
- **Largest Project Managed**: amount or description
- **Consortium Experience**: Yes/No
- **EU Funding Experience**: Description of EU programs used
- **US Gov Funding Experience**: Description if applicable
- **Audit Ready**: Yes/No
- **Pre-Financing Capacity**: Yes/No

## Funding Landscape

### Past Grants

For each grant:

- **Funder**: Full funder name
- **Program**: Specific program name
- **Amount**: Grant amount with currency
- **Year**: Year received
- **Project**: Project title

---

### Current Donors

- Active donor 1
- Active donor 2

### Funder Types Used

- **Specialized Foundations**:
  - Foundation 1
  - Foundation 2
- **Regional/Geographic**:
  - Program 1
  - Program 2
- **Bilateral Agencies**:
  - Agency 1
  - Agency 2
- **Community Foundations**:
  - Foundation 1
  - Foundation 2
- **Government Programs**:
  - Program 1
  - Program 2
- **Corporate Foundations**:
  - Foundation 1
  - Foundation 2
- **International Organizations**:
  - Organization 1
  - Organization 2

### Applicable Programs

- **EU Programs**:
  - Specific EU program and strand 1
  - Program 2
- **US Gov Programs**:
  - Program 1
  - Program 2
- **Regional Funds**:
  - Fund 1
  - Fund 2
- **Bilateral Programs**:
  - Program 1
  - Program 2
- **Specialized Sector Funders**:
  - Specialized funder 1
  - Specialized funder 2
- **Development Banks**:
  - Bank 1
  - Bank 2

### National Agencies

- Agency 1
- Agency 2

### Local Foundations

- Foundation 1
- Foundation 2

## Partnerships

- **Current Partners**:
  - Partner 1
  - Partner 2
- **International Networks**:
  - Network 1
  - Network 2
- **Consortium Partners**:
  - Partner 1
  - Partner 2
- **Academic Partnerships**:
  - University 1
  - University 2
- **Private Sector**:
  - Company 1
  - Company 2
- **Umbrella Memberships**:
  - Umbrella org 1
  - Umbrella org 2

## Needs and Priorities

- **Stated Funding Needs**:
  - Need 1
  - Need 2
- **Infrastructure Needs**:
  - Equipment
  - Facilities
- **Capacity Building Needs**:
  - Training 1
  - Training 2
- **Expansion Plans**:
  - Plan 1
  - Plan 2
- **Strategic Priorities**:
  - Priority 1
  - Priority 2
- **Funding Priorities** (from additional context):
  - Funding priority 1 from additional context
  - Funding priority 2 from additional context
- **Funding Exclusions** (from additional context):
  - Exclusion 1 from additional context (e.g., "we don't take federal grants")
  - Exclusion 2
- **Specific Projects Seeking Funding**:
  - Project 1
  - Project 2

## Eligibility Flags

- **Women Led**: Yes/No/Unknown
- **Minority Led**: which minority or N/A
- **Minority Serving**: minority 1, minority 2 (or N/A)
- **Youth Led**: Yes/No/Unknown
- **Disability Focused**: Yes/No/Unknown
- **Disability Led**: Yes/No/Unknown
- **Indigenous Led**: Yes/No/Unknown
- **Indigenous Serving**: Yes/No/Unknown
- **Survivor Led**: Yes/No/Unknown
- **Faith Based**: which tradition or N/A
- **For Profit**: Yes/No/Unknown
- **Social Enterprise**: Yes/No/Unknown
- **Academic Institution**: Yes/No/Unknown
- **Grassroots**: Yes/No/Unknown
- **Has 501(c)(3)**: Yes/No/Unknown
- **Registered Charity**: Yes/No/Unknown
- **EU Eligible**: Yes/No/Unknown
- **Sanctions Check**: clear/flagged/unknown

## Unique Value Propositions

- **Primary Innovation**: Main unique aspect
- **Competitive Advantages**:
  - Advantage 1
  - Advantage 2
- **Impact Achievements**:
  - Achievement 1
  - Achievement 2
- **Recognition Awards**:
  - Award 1
  - Award 2

## Previous Funders

Deduplicated list of all funder names from past grants and current donors:

- Funder 1 name
- Funder 2 name
- Funder 3 name

## Peer Organization Funders

Deduplicated list of all funders from peer organizations:

- Funder A that supports peer orgs
- Funder B that supports peer orgs

# Important Notes

IMPORTANT: 
- Be comprehensive but accurate. Omit sections if not found rather than guessing.
- Use multiple searches in different languages.
- **PRIORITIZE NICHE CHARACTERISTICS** - these unlock specialized funding ecosystems.
- **IDENTIFY PEER ORGANIZATIONS** - their funders are likely good matches.
- **MAP GEOGRAPHIC HIERARCHY** - organizations qualify at multiple geographic levels.
- Be as SPECIFIC as possible in sector descriptions - "Jewish heritage preservation" not just "culture".
- **EXTRACT FUNDER LISTS**: Populate "Previous Funders" with a deduplicated list of all funder names from past grants and current donors. Populate "Peer Organization Funders" with a deduplicated list of all funders from peer organizations. These lists are critical for grant discovery.`;

  const prompt2Content = `You are helping an NGO define their general funding needs for comprehensive grant discovery.

==================================================
ORGANIZATION PROFILE
==================================================

The user has attached an organization research file. Extract all relevant information from it, including:

- **Basic Information**: Organization name, acronym, website, mission, vision
- **Niche Identity**: Specialized sector, community focus, funding ecosystem, specialized terminology
- **Size and Financials**: Organization size, employee count, annual revenue, grant size range
- **Geographic Context**: Location, country, EU status, regional blocs
- **Classifications**: Primary sector, broader sectors, secondary sectors, cross-cutting themes
- **Special Circumstances**: Refugee support, crisis response, minority-serving, faith-based, etc.
- **Capacity Indicators**: Match funding capacity, EU funding experience, consortium experience
- **Eligibility Flags**: Women-led, minority-led, faith-based, registered charity, 501(c)(3), etc.
- **Previous Funders**: List of past and current funders
- **Peer Organization Funders**: Funders that support similar organizations

Use this extracted information throughout the task to create an accurate funding profile.




==================================================
TASK
==================================================

Create an organization-wide funding overview that will help discover ALL relevant grant opportunities.

This should capture:
1. What kinds of funding this org typically needs (based on their work)
2. The SPECIALIZED funding ecosystem they belong to (if any)
3. What grant types and funding mechanisms fit their profile
4. What to AVOID (be very specific - saves time)

==================================================
OUTPUT FORMAT (in English)
==================================================

# Organization Funding Profile
[Organization Name] - Comprehensive Funding Needs

# Specialized Sector & Niche Identity
[If organization has a specialized sector/community focus, emphasize this]
This organization operates in the [specialized sector] sector/ecosystem.
They are part of the [funding ecosystem] funding ecosystem.
They specifically focus on [target communities] communities.

[Explain why this niche identity opens specific funding opportunities]

# Core Funding Needs
[2-3 sentences about what kinds of costs this org typically needs funded]

Base this on:
- Organization type and size ([organization size and annual budget])
- Specialized sector ([specialized sector])
- Whether they do direct services vs advocacy vs research vs cultural work

Examples based on org type:
- Direct service orgs: Personnel costs for service delivery, program operations, beneficiary support
- Advocacy orgs: Campaign costs, staff capacity, coalition building, research
- Cultural/heritage orgs: Preservation costs, exhibition/programming, documentation, education
- Research orgs: Research costs, publications, convening, knowledge dissemination
- Capacity-building orgs: Training delivery, curriculum development, technical assistance

# Organization Priorities & Mission Alignment
[2-3 paragraphs explaining the org's work and funding priorities]

Include:
- Their core mission and how funding supports it
- Their work with [target communities] communities
- Any current strategic priorities or expansion plans
- Geographic scope and reach

# What We're Looking For

## Specialized/Niche Funders (Priority)

[List grant types specific to [specialized sector]]
Examples:
- Specialized [specialized sector] foundations and funders, and similar funders with related missions
- Programs within the [funding ecosystem] funding ecosystem and related funding networks
- [Specialized sector] community grants and similar community-focused funding
- Funders specifically supporting [target communities] and related populations

Note: The funders listed above are examples. Include other foundations and programs with similar focus areas, missions, or target populations.


## Geographic & Regional Funders
[Based on geography: [geographic location]]
- Local/regional funders in [geographic location]
- National grant programs
- EU programs ([EU status])
- Bilateral programs from: [bilateral donor countries]

## Grant Types That Fit
[Based on org size, capacity, and history]
Appropriate grant sizes based on [annual budget] annual budget

Types to include:
- EU program grants ([EU funding experience status])
- Project/program grants aligned with [specialized sector]
- General operating support / unrestricted funding
- Grants with reasonable match requirements
- Multi-year funding opportunities
- Capacity-building and organizational development grants
- Consortium/partnership grants
- Both time-limited calls AND rolling/ongoing programs

## Special Eligibility Opportunities




[Based on eligibility flags from organization research]
- [Special eligibility category 1, e.g., Faith-based organization funding ([faith tradition])]
- [Special eligibility category 2, e.g., Women-led organization funding]
- [Special eligibility category 3, e.g., Minority-serving organization funding]



# What We're NOT Looking For

[CRITICAL - Be very specific to save time during search]



## Geographic Mismatches

- Grants requiring US 501(c)(3) status ([US-based status])
- Grants explicitly excluding [country/region]

## Sector Mismatches
[Based on what this org does NOT do]
- Grants exclusively for sectors OTHER than [specialized sector]
- [Sector mismatch 1, e.g., Research grants requiring academic institutional affiliation or peer-reviewed publications]
- [Sector mismatch 2, e.g., Medical/clinical research or healthcare delivery grants]
- [Sector mismatch 3, e.g., Pure environmental conservation grants (unless cross-sector relevance)]

## Capacity Mismatches

[Based on org size and capacity]
- Grants significantly larger than [largest grant received or typical grant range] (beyond org's management capacity)
- [Capacity mismatch 1, e.g., Large capital/infrastructure grants for building construction]
- [Capacity mismatch 2, e.g., Grants requiring extensive pre-financing capacity]

## Wrong Funding Mechanisms
- Individual fellowships or scholarships (organizational funding only)
- Loans or repayable financing (grants only)
- Awards or prizes without funding attached


# Funding Priorities (in order)

[List 3-4 priority funding types based on org characteristics and strategic needs]

1. [Priority 1, e.g., Specialized [specialized sector] funders (highest fit, often less competitive)]
2. [Priority 2, e.g., Strengthening [specific area] at [geographic level]]
3. [Priority 3, e.g., Capacity building and organizational development]
4. [Priority 4, e.g., General operating support]

# Typical Budget Range

Range depends on specific project - from small grants (<$10k) to larger program grants (>$100k)

For project-specific grants: Typically match project scope and org capacity
For operating support: Ideally 1-2 year general support grants

---

INSTRUCTIONS:
1. Make realistic inferences from the org profile
2. EMPHASIZE specialized sector/niche identity - this is key for grant discovery
3. Be VERY specific about what ISN'T wanted - this prevents wasted time
4. Consider implicit constraints (no academic affiliation → probably can't do research grants)
5. Think about org stage and capacity
6. Reference specific characteristics that open special funding streams
7. Keep tone professional but realistic
8. If organization is part of a specialized funding ecosystem, make this prominent

OUTPUT ONLY THE STRUCTURED DESCRIPTION. Do not add explanatory commentary.`;

  // Full prompt content embedded directly
  const prompt3Content = `You are conducting a COMPREHENSIVE grant discovery search for an organization.

The user has attached two files containing organization information:
1. Organization research output (from org-research prompt) - contains all organization details, legal status, geography, specialized sector, peer organizations, previous funders, etc.
2. Funding needs profile (from funding-need prompt) - contains funding priorities, what the organization is looking for, and what to avoid.

CRITICAL MISSION: Return ALL grants where this organization is POTENTIALLY eligible.

INCLUSION PRINCIPLE: If eligibility is ambiguous, INCLUDE the grant.

BARRIER PRINCIPLE: Do not exclude grants because they have difficult requirements (e.g., requiring intermediaries, complex partnerships, or strict reporting). Include them and note the barrier.

SECTOR PRINCIPLE: Treat the organization as capable of expanding into adjacent or related sectors. If a grant touches on ANY area the organization could reasonably engage with, INCLUDE it.

==================================================
ORGANIZATION INFORMATION SOURCE
==================================================

Extract ALL organization details from the attached files:

**From Organization Research file:**
- Organization name and legal status (from "Legal and Registration" section)
- Geographic location and EU/international status (from "Geographic Context" section)
- Specialized sector and niche identity (from "Niche Identity" section)
- Community focus and target populations (from "Niche Identity" section)
- Funding ecosystem (from "Niche Identity" section)
- Peer organizations and their funders (from "Peer Organizations" and "Peer Organization Funders" sections)
- Previous funders (from "Previous Funders" section)
- Eligibility flags (from "Eligibility Flags" section)
- Languages and local search terms (from "Languages" section)
- Grant size range and capacity (from "Size and Financials" and "Capacity Indicators" sections)

**From Funding Needs file:**
- What the organization is looking for (from "What We're Looking For" section)
- What to avoid (from "What We're NOT Looking For" section)
- Funding priorities (from "Funding Priorities" section)
- Typical budget range (from "Typical Budget Range" section)

Use this information throughout the search process to determine eligibility and construct search queries.

==================================================
ORGANIZATION LEGAL STATUS (CHECK FIRST - HARD STOP)
==================================================

Extract from Organization Research file:
- Legal status (from "Legal and Registration" → "Legal Status")
- Registered charity status (from "Eligibility Flags" → "Registered Charity")
- 501(c)(3) status if applicable (from "Eligibility Flags" → "Has 501(c)(3)")
- Academic institution status (from "Eligibility Flags" → "Academic Institution")

LEGAL ELIGIBILITY PROFILE:
Based on the organization's legal status, determine:
✓ What types of grants this organization CAN apply to
✗ What types of grants this organization CANNOT apply to

WHAT THIS ORGANIZATION CAN APPLY TO:
[Extract from legal status - typically includes grants for nonprofits/NGOs/civil society organizations, charitable organizations, etc.]

WHAT THIS ORGANIZATION CANNOT APPLY TO:
[Extract from legal status - typically excludes grants requiring academic institutional affiliation, university status, US 501(c)(3) if not applicable, etc.]

==================================================
ORGANIZATION GEOGRAPHIC ELIGIBILITY (CHECK SECOND)
==================================================

Extract from Organization Research file:
- Location (from "Geographic Context" section)
- EU status (from "Geographic Context" → "EU Status")
- US status if applicable (from "Geographic Context" → "US Status")
- Geographic hierarchy (from "Geographic Context" → "Geographic Hierarchy")

GEOGRAPHIC ELIGIBILITY PROFILE:

✓ CAN apply to: [Determine based on geographic context - typically includes global/worldwide programs, continental programs, regional programs, national/local programs]

GEOGRAPHIC RESTRICTIONS TO EXCLUDE:
✗ CANNOT apply to: [Determine based on geographic context - typically excludes programs explicitly excluding the organization's location, programs requiring different geographic status, etc.]

==================================================
OTHER ORGANIZATION DETAILS
==================================================

Extract from Organization Research file:

Organization: [From "Basic Information" → "Name"]
Founded: [From "Legal and Registration" → "Year Founded"]

SPECIALIZED IDENTITY (Search priority):
Specialized Sector: [From "Niche Identity" → "Specialized Sector"]
Community Focus: [From "Niche Identity" → "Community Focus"]
Funding Ecosystem: [From "Niche Identity" → "Funding Ecosystem"]

SPECIAL ELIGIBILITY FLAGS:
[Extract from "Eligibility Flags" section - e.g., Women-led, Minority-serving, Faith-based, etc.]

PEER ORGANIZATIONS (check their funders):
[Extract from "Peer Organizations" section - list peer organizations with their known funders]

PREVIOUS FUNDERS (organization's own funders - high priority for repeat applications):
[Extract from "Previous Funders" section]

PEER ORGANIZATION FUNDERS (funders of similar organizations - likely good matches):
[Extract from "Peer Organization Funders" section]

FUNDING NEED:
[Extract the entire "What We're Looking For" section from the Funding Needs file]

==================================================
MULTI-DIMENSIONAL SEARCH STRATEGY
==================================================

Search comprehensively and INCLUDE generously. Cast the widest possible net. Include anything with potential.
Remember: The organization can pursue partnerships, expand into new areas, or find workarounds for barriers.

### PHASE 1: SPECIALIZED SECTOR FUNDERS (HIGHEST PRIORITY)

Search for funders specific to the organization's specialized sector:
- Use the "Specialized Sector" from the organization research
- Use the "Funding Ecosystem" from the organization research
- Use specialized terminology from "Niche Identity" → "Specialized Terminology"
- Use local language search terms from "Languages" → "Grant Search Terms" → "Specialized Local"

Queries to construct:
- "[Specialized Sector]" grants [Country/Region]
- "[Specialized Sector]" funding [Geographic Hierarchy]
- "[Specialized Sector]" foundation
- "[Local language specialized terms]" grants OR funding
- "[Funding Ecosystem]" grants

### PHASE 2: PREVIOUS FUNDERS (HIGHEST CONVERSION RATE)

Check current open calls from funders who have supported this organization before:
- Extract funder names from "Previous Funders" section
- For each funder, search: "[Funder name]" open call OR grant program OR funding opportunity

### PHASE 3: PEER ORGANIZATION FUNDER INTELLIGENCE

Check current open calls from funders who support similar organizations:
- Extract funder names from "Peer Organization Funders" section
- For each funder, search: "[Funder name]" open call OR grant program OR funding opportunity

### PHASE 4: GEOGRAPHIC FUNDERS (Multiple levels)

Use geographic hierarchy from "Geographic Context" → "Geographic Hierarchy":

Specific/Local Level:
- "[City/Specific region]" [Specialized Sector] NGO funding
- "[Country]" nonprofit grants

Regional Level:
- "[Medium geographic level]" [Specialized Sector] grants OR funding
- "[Regional bloc]" [Specialized Sector] grants OR funding

Continental/Global:
- "[Continental level]" [Specialized Sector] grants
- global [Specialized Sector] funding

### PHASE 5: LEGAL STATUS-SPECIFIC FUNDERS

Based on legal status:
- NGO grants [Country]
- civil society grants [Region]
- nonprofit funding [Specialized Sector]
- [Other legal status-specific searches based on organization type]

### PHASE 6: BILATERAL & DEVELOPMENT PROGRAMS

Search bilateral cooperation programs:
- Extract from "Geographic Context" → "Bilateral Donors"
- For each donor country: "[Donor country]" development cooperation [Country]
- For each donor country: "[Donor country]" embassy [Country] grants

### PHASE 7: ELIGIBILITY-SPECIFIC FUNDERS

Based on eligibility flags from "Eligibility Flags" section:
- If Women-led: "women-led organization" grants
- If Minority-serving: "[Minority groups]" community grants
- If Faith-based: "[Faith tradition]" organization grants
- [Other eligibility-specific searches based on flags]

### PHASE 8: ROLLING & ONGOING PROGRAMS

Include programs accepting applications year-round:
- "rolling applications" [Specialized Sector] [Region]
- "year-round" OR "no deadline" [Specialized Sector] grants
- "continuous" OR "ongoing" [Specialized Sector] funding

### PHASE 9: LOCAL LANGUAGE SEARCHES

Search in local language using terms from "Languages" → "Grant Search Terms":
- "[Generic Local terms]" [Country]
- "[Specialized Local terms]" [Country]
- [Other local language variations]

==================================================
TERMINOLOGY VARIATIONS (Use all of these)
==================================================

Different funders use different language - search using ALL:
- "call for proposals", "call for applications", "open call"
- "grant program", "grant opportunity", "funding opportunity"  
- "apply for support", "grant guidelines", "funding guidelines"
- "how to apply", "application process", "submit application"
- "rolling applications", "year-round", "ongoing program"

==================================================
VALIDATION CHECKLIST - "INNOCENT UNTIL PROVEN GUILTY"
==================================================

For each grant, ask: "Is there EXPLICIT evidence this organization CANNOT apply?"
If NO explicit disqualifier exists → INCLUDE the grant (note any uncertainties)

### LEGAL STATUS CHECK (Only exclude if EXPLICITLY incompatible)
☐ Does the grant EXPLICITLY state it's ONLY for a different legal type?
   - If grant says "nonprofits only" and org is for-profit → EXCLUDE
   - If grant says "for-profits only" and org is nonprofit → EXCLUDE
   - If grant doesn't specify legal requirements → INCLUDE
   - If grant says "organizations" or is vague → INCLUDE (note ambiguity)

[Check against legal status from organization research]

### GEOGRAPHIC CHECK (Only exclude if EXPLICITLY excluded)
☐ Does the grant EXPLICITLY exclude this organization's location?
   - If grant says "[EU status requirement]" and org doesn't meet it → EXCLUDE
   - If grant LISTS eligible countries and organization's country is NOT listed → EXCLUDE
   - If grant says "global", "international", or doesn't specify → INCLUDE
   - If eligibility is regional and org is in/near the region → INCLUDE (note uncertainty)

[Check against geographic context from organization research]

### SPECIAL REQUIREMENTS (Note as barriers, don't exclude)
☐ Does the grant require partnerships, consortiums, or intermediaries?
   → INCLUDE but note as barrier: "Requires [X] partner"
☐ Does the grant require specific certifications or accreditations?
   → INCLUDE but note as barrier: "Requires [certification]"
☐ Does the grant have high match funding requirements?
   → INCLUDE but note as barrier: "Requires X% co-financing"

### IS THIS AN ACTUAL GRANT OPPORTUNITY?
Include if the page describes a funding opportunity. Exclude ONLY:
✗ General funder homepages without specific programs
✗ Loans, investments, or venture capital (not grants)
✗ News articles without application links
✗ Programs explicitly marked as closed with no future cycles

### DEADLINE CHECK (Be generous)
☐ Include if deadline is in the future, OR
☐ Include if "rolling", "ongoing", "year-round", "continuous", OR
☐ Include if deadline unclear → note "Verify deadline status"
☐ ONLY exclude if explicitly "closed" with no indication of future cycles

### SECTOR/THEMATIC FIT (Be expansive)
☐ Core match: Grant directly aligns with specialized sector → High match
☐ Adjacent match: Grant touches related areas org could expand into → Medium match, note "Sector stretch"
☐ Stretch match: Grant in different sector but org could make a case → Low match, note "Creative positioning needed"
☐ ONLY exclude if grant is for a completely unrelated field
☐ Consider how grant could support the funding need described

[Check against specialized sector and funding needs from attached files]

### CAPACITY REQUIREMENTS (Note as barriers, don't exclude)
☐ If grant requires larger budget than org has → INCLUDE, note "May need capacity building or partner"
☐ If requires consortium → INCLUDE, note "Requires consortium partners"
☐ If requires high co-financing → INCLUDE, note "Requires X% match funding"

[Check against grant size range and capacity indicators from organization research]

==================================================
CLEAR DISQUALIFIERS - ONLY EXCLUDE IF EXPLICIT
==================================================

### Definite Exclusions (hard stops):

✗ Grant EXPLICITLY says "academic institutions ONLY" or "universities ONLY" → EXCLUDE (unless org is academic institution)
✗ Grant EXPLICITLY requires specific legal status org doesn't have → EXCLUDE
✗ Grant EXPLICITLY says "US 501(c)(3) REQUIRED" → EXCLUDE (unless org has 501(c)(3))
✗ Grant EXPLICITLY excludes organization's country by name → EXCLUDE
✗ Grant requires for-profit status and org is nonprofit (or vice versa) → EXCLUDE

### NOT Grant Opportunities (exclude these):
✗ General funder homepages without specific programs
✗ Loans, investment funds, or venture capital (not grants)
✗ News articles without application information
✗ Expired programs with no future cycles

### Borderline Cases (INCLUDE with notes):
- Grant requires partnership → INCLUDE, note "Requires partner"
- Grant deadline unclear → INCLUDE, note "Verify deadline"
- Grant eligibility vague → INCLUDE, note "Eligibility ambiguous - verify"
- Grant in adjacent sector → INCLUDE, note "Sector stretch - could fit [reason]"

==================================================
OUTPUT FORMAT
==================================================

Provide your analysis of the grants search results in a concise and informative way.

Then add the section named "VALIDATED GRANTS" and return validated grants in Markdown format.

For each validated grant, provide:

## Grant: [Specific program name]

- **Funder**: [Organization providing the funding]
- **URL**: [Direct URL to the SPECIFIC grant/program page with application info]
- **Deadline**: [YYYY-MM-DD OR 'Rolling' OR 'Ongoing year-round']
- **Why Eligible**: [Why THIS organization qualifies or could potentially qualify]
- **Validation Notes**: [Any ambiguities, uncertainties, or requirements to verify]

---

==================================================
FINAL INSTRUCTIONS - "INNOCENT UNTIL PROVEN GUILTY"
==================================================

VALIDATION LOGIC: A grant should be INCLUDED unless you can PROVE it is ineligible.
- If the grant guidelines are vague about eligibility → INCLUDE (note the ambiguity)
- If the grant requires complex steps (intermediaries, partnerships) → INCLUDE (note the barrier)
- If the grant is in an adjacent sector the org could expand into → INCLUDE (note the stretch)
- If you're uncertain → INCLUDE and explain the uncertainty

ONLY EXCLUDE if there is EXPLICIT, CLEAR evidence of ineligibility:
- Grant EXPLICITLY requires legal status org doesn't have → EXCLUDE
- Grant EXPLICITLY requires geographic status org doesn't have → EXCLUDE
- Grant EXPLICITLY excludes the organization's country by name → EXCLUDE
- Grant requires for-profit status and org is nonprofit (or vice versa) → EXCLUDE

1. **Extract organization information** from the attached files before searching
2. **Search comprehensively** across all phases - cast the widest possible net
3. **Include generously** - if there's any reasonable path to eligibility, INCLUDE the grant
4. **Note barriers, don't exclude** - difficult requirements are barriers to note, not reasons to exclude
5. **Quantity AND quality** - more options give the organization more choices

TARGET: 30-60 potentially relevant grants, including some stretches worth exploring.`;

  const prompt4Content = `You are an expert grant analyst helping NGOs find relevant funding opportunities. Your task is to extract information from a grant webpage and evaluate its relevance to a specific organization and project.

# ========================================
# INPUT INFORMATION (FILL IN BEFORE USE)
# ========================================

**Current Date (for deadline evaluations):**
<INSERT CURRENT DATE: YYYY-MM-DD>

**Grant Name:**
<INSERT GRANT NAME>

**Grant Webpage URL:**
<INSERT GRANT WEBPAGE URL>

# ========================================
# ORGANIZATION & FUNDING NEED
# ========================================

The user has attached two files containing organization information:

1. **Organization Research** - Contains all organization details including:
   - Organization name, legal status, registration
   - Geographic location and EU/international status
   - Specialized sector and niche identity
   - Community focus and target populations
   - Peer organizations and their funders
   - Previous funders
   - Eligibility flags (faith-based, women-led, minority-serving, etc.)
   - Size and capacity indicators
   - Grant size range

2. **Funding Need Profile** - Contains:
   - What the organization is looking for (specialized funders, geographic funders, grant types)
   - What to avoid (geographic mismatches, sector mismatches, capacity mismatches, wrong funding mechanisms)
   - Funding priorities
   - Typical budget range

Extract all relevant details from these attached files to evaluate the grant.

# ========================================
# DEADLINE EVALUATION RULES
# ========================================

- ALWAYS use the current date provided above when determining if a deadline has passed
- Compare grant deadlines to the current date to determine if the grant is closed
- Calculate deadline urgency based on time remaining between the current date and the deadline
- Do NOT guess the current date - use the exact date provided above

# ========================================
# URL-BASED INFORMATION EXTRACTION
# ========================================

- Access and analyze the grant webpage at the URL provided above
- The grant information may be distributed across multiple pages on the same website
- Eligibility criteria, application guidelines, and detailed requirements are often found on separate pages linked from the main grant page
- Some critical information (especially eligibility rules, application forms, and detailed guidelines) may be in downloadable PDFs linked from the page
- Follow all relevant links on the grant page to gather complete information, including:
  - "Eligibility" or "Who Can Apply" pages
  - "Application Guidelines" or "How to Apply" pages
  - "FAQ" or "Frequently Asked Questions" pages
  - Downloadable PDF documents (guidelines, application forms, etc.)
  - Related program pages that contain additional requirements
- If eligibility information is mentioned but not fully detailed on the main page, search for linked pages or documents that contain the complete eligibility criteria
- Extract information from PDFs if they are linked and contain critical details about eligibility, requirements, or application process
- Be thorough in gathering information from all accessible linked resources

# Task

**CRITICAL FIRST STEP**: Before evaluating relevance, determine if the webpage actually offers a grant or funding opportunity. If the page does NOT offer any funding opportunity, re-granting mechanism, or financial support for external organizations, and is not a structured grant or funding call (e.g., it's just informational content, news articles, general organizational websites without funding programs), then set relevance to "Not Eligible", note it as a hard blocker, and mark it as not an actual grant opportunity. Still extract available information, but make it clear this is not an actual grant opportunity.

Extract all relevant information from the grant webpage and evaluate how well it matches the organization and funding need from the attached files.

# Evaluation Guidelines

## Relevance Scoring (0-100)

Evaluate based on these factors:

**HARD BLOCKERS (automatic score of 0):**
- **NO ACTIVE RFP/FUNDING OPPORTUNITY**: If there is no active, open call for applications on this page. This includes:
  - Pages that are informational only about a funder or past programs
  - News articles or announcements about planned/future grants (without application details)
  - Pages showing past awards or previous grant recipients
  - Login pages for foundation portals or grant management systems
  - General organizational websites without active funding programs
  - Any page that does NOT contain a direct link or instructions to apply NOW
- **ORGANIZATION FUNDING EXCLUSIONS**: If the grant matches any of the organization's specified funding exclusions from the Funding Need file (e.g., "we don't take federal grants", "no government funding"). These are explicit restrictions and must be treated as hard blockers.
- Grant is closed with NO anticipated future cycle (deadline has passed and no indication of recurring/future calls) - USE THE CURRENT DATE provided above
- Geographic eligibility excludes the organization's location/focus
- Organizational requirements explicitly exclude this type of org (e.g., "only government entities" when org is an NGO)
- Budget requirements are completely incompatible (e.g., minimum €5M when org annual budget is €100K)

**NOT HARD BLOCKERS (do NOT set score to 0):**
- **ANTICIPATED/RECURRING GRANTS**: If the grant is currently closed but has a clear pattern of recurring calls (annual, biannual, quarterly, etc.) or explicitly mentions an upcoming cycle, do NOT set score to 0. Instead, evaluate the match quality and note it as "Anticipated". The score should reflect how good a fit the grant would be when it reopens.
- **INVITE-ONLY GRANTS**: If the grant requires an invitation or letter of inquiry before applying, do NOT set score to 0. The organization may still be able to seek an invitation. Note it as "Invite-Only" and provide guidance on recommended action.

**PRIMARY FACTORS (heavily weighted):**
- Geographic alignment (does the grant geography match where the org operates?)
- Sector/focus area match (does the grant's focus align with org's work?)
- Target population served (does the grant target the same beneficiaries?)
- Budget compatibility (is the grant amount appropriate for org size and project scope?)

**SECONDARY FACTORS (moderate weight):**
- Organizational characteristics match (women-led, disability-focused, grassroots, etc.)
- Project alignment (if project provided, does it match grant's priorities?)
- **Funding priorities alignment** (from Funding Need file - how well does this grant match those priorities?)
- Eligibility requirements met (years of operation, legal status, etc.)

**SCORE RANGES:**
- 90-100: Exceptional match, highly recommended
- 70-89: Strong match, worth pursuing
- 40-69: Moderate match, review carefully
- 1-39: Weak match, likely not worth effort
- 0: Hard blocker present, not eligible

## Grant Type Classification

Determine grant type based on EXPLICIT language in the grant description:
- **"Project Grant"**: If explicitly requires project-specific funding, project proposals, or states "does not fund general operating costs"
- **"Operating Support"**: If explicitly mentions "general operating support", "core funding", "organizational support", or "unrestricted funding"
- **"Both"**: If explicitly states both project and operating costs are eligible
- **"Unclear"**: If not explicitly stated (this will be common - don't guess!)

## Funding Source Classification

Classify the funding source type based on the funder organization:

**For U.S. funders:**
- **"Federal"**: U.S. federal government agencies (e.g., NIH, NSF, Department of Education, HHS, USAID)
- **"State"**: State government agencies
- **"Local"**: City/county government
- **"Foundation"**: Private foundations
- **"Corporate"**: Corporate giving programs

**For European funders:**
- **"EU"**: European Union institutions (e.g., European Commission, Horizon Europe, Erasmus+, EU structural funds)
- **"National"**: National government agencies of EU member states
- **"Regional"**: Regional/state government within EU countries
- **"Local"**: City/county government
- **"Foundation"**: Private foundations
- **"Corporate"**: Corporate giving programs

**For other regions:**
- Use the most appropriate classification based on the funder's nature
- Default to "Unknown" if unclear

## Application Process Analysis

Provide a clear, actionable overview of what's involved in applying. This is CRITICAL for helping users decide if they have the capacity to pursue this grant.

**Effort Level Assessment:**
- **Low**: Simple online form, minimal documentation (e.g., "Fill out 2-page online form")
- **Medium**: Standard proposal, common documents (e.g., "Submit 5-page proposal + budget + org registration")
- **High**: Detailed proposal, multiple documents, some complexity (e.g., "15-page proposal + 3-year financials + letters of support + detailed budget")
- **Very High**: Complex requirements, consortium building, extensive documentation (e.g., "Build consortium of 3+ partners, 50-page proposal, detailed logframes, multiple country clearances")

**Key signals for "Very High" effort:**
- Consortium/partnership requirements
- Multi-stage application process
- Extensive documentation (20+ pages)
- Multiple review rounds
- Concept note → full proposal process
- Requirements for pre-registration or expressions of interest months in advance

**In the summary, be specific and practical:**
- ✅ "Visit [URL] to submit a 2-page online application form and upload your registration certificate"
- ✅ "Prepare a 10-page project proposal including budget, logframe, and risk assessment. Email to grants@funder.org by the deadline"
- ✅ "Two-stage process: Submit 3-page concept note by March 1st. If shortlisted, full 25-page proposal due May 1st"
- ❌ "Follow the application guidelines" (too vague!)

## Opportunity Status Classification

Determine the current status of the funding opportunity:

- **"Open"**: The grant is currently accepting applications. Deadline has not passed or it's rolling/ongoing.
- **"Closed"**: The grant call has ended and NO future cycle is anticipated or mentioned. This is a hard blocker.
- **"Anticipated"**: The grant is currently closed BUT has a pattern of recurring calls OR explicitly mentions an upcoming cycle. Include expected next cycle timing and frequency.
- **"No Active RFP"**: There is no active Request for Proposals or open funding opportunity on this page.
- **"Not Eligible"**: The organization is not eligible for this grant regardless of timing (geographic, org type, or other eligibility exclusions).
- **"Invite-Only"**: The grant requires prior relationship, invitation, or letter of inquiry before submitting a full application.

## Competitiveness Assessment

Evaluate how competitive this grant is likely to be:

**Look for explicit indicators:**
- Published success rates or number of applications received
- Number of grants awarded per cycle
- Statements like "highly competitive" or "we fund X% of applicants"

**Estimate when not explicit:**
- **Very High competition**: Large well-known funders, flagship programs, very large grant amounts (>$500K)
- **High competition**: Established government programs, popular foundation programs, amounts $100K-$500K
- **Medium competition**: Regional funders, specialized niche programs, amounts $25K-$100K  
- **Low competition**: Small family foundations, local community funds, new programs, amounts <$25K
- **Unknown**: Default if no indicators present

## Cash Flow & Payment Terms Assessment

Identify payment structure as this significantly impacts organizational cash flow planning:

- **Upfront**: Full or significant advance payment at start
- **Milestone**: Payments tied to deliverables or project phases
- **Reimbursement**: Organization must spend first, then claim back (cash flow burden!)
- **Mixed**: Combination (e.g., 20% advance, rest on milestones)
- **Unknown**: Default if payment terms not specified

Flag reimbursement-based grants in red flags as they require working capital.

# Output Format

Provide your analysis in Markdown format following this structure:

---

## Grant Evaluation: [Grant Name]

**Evaluation Date**: [Current date used for evaluation]
**Source URL**: [Grant webpage URL]

---

### Quick Summary

- **Relevance Score**: [0-100] / 100
- **Relevance Category**: [High (70+) / Medium (40-69) / Low (1-39) / Not Eligible (0)]
- **Opportunity Status**: [Open / Closed / Anticipated / No Active RFP / Not Eligible / Invite-Only]
- **Recommended Action**: [Clear, actionable recommendation - 1 sentence]

---

### Grant Overview

- **Grant Title**: [Exact grant title - keep in original language]
- **Funder**: [Funding organization name - keep in original language]
- **Funding Source Type**: [Federal / State / Local / Foundation / Corporate / EU / National / Regional / Unknown]
- **Grant Type**: [Project Grant / Operating Support / Both / Unclear]

#### Funding Amount
- **Minimum**: [Amount with currency, or "Not specified"]
- **Maximum**: [Amount with currency, or "Not specified"]
- **Notes**: [Any additional context about funding amount]

#### Deadline
- **Deadline**: [Date in YYYY-MM-DD format, or "Rolling", or "Unknown"]
- **Deadline Status**: [Open / Closed / Rolling / Unknown]
- **Time Remaining**: [X days/weeks/months until deadline, or N/A]

#### If Anticipated/Recurring:
- **Next Cycle Expected**: [e.g., "Spring 2025", "Q1 2025"]
- **Cycle Frequency**: [e.g., "Annual", "Biannual", "Quarterly"]

---

### Eligibility Criteria

[List all eligibility requirements as bullet points]

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- ...

---

### Geographic Focus

[List eligible geographic regions/countries]

- [Region/Country 1]
- [Region/Country 2]
- ...

---

### Sector Focus

[List focus areas/sectors]

- [Sector 1]
- [Sector 2]
- ...

---

### Application Process

**Effort Level**: [Low / Medium / High / Very High]

**Summary**: [1-2 sentence overview of what's required to apply]

**Steps**:
1. [Step 1]
2. [Step 2]
3. [Step 3]
...

**Key Documents Required**:
- [Document 1]
- [Document 2]
- ...

**Application URL**: [Where to apply, or "Not specified"]
**Contact Email**: [If specified, or "Not specified"]
**Estimated Time to Apply**: [If mentioned, or "Not specified"]

---

### Requirements

- **Consortium Required**: [Yes / No]
- **Matching Funds Required**: [Yes / No]
  - Details: [If yes, provide details about matching requirements]
- **Other Requirements**:
  - [Requirement 1]
  - [Requirement 2]
  - ...

---

### Competitiveness Assessment

- **Competition Level**: [Low / Medium / High / Very High / Unknown]
- **Success Rate**: [X% if known, or "Not specified"]
- **Awards Per Cycle**: [Number if known, or "Not specified"]
- **Notes**: [Explanation of estimate or source of data]

---

### Funder History

- **Funds New Organizations**: [Yes / No / Unknown]
- **Typical Grantee Profile**: [Description if discernible, or "Not specified"]
- **Has Funded Similar Organizations**: [Yes / No / Unknown]
- **Relationship Importance**: [Low / Medium / High / Unknown]

**Similar Organizations Funded** (if found):
| Organization Name | Year Funded |
|-------------------|-------------|
| [Org name] | [Year] |
| [Org name] | [Year] |

**Notes**: [Relevant context about funder patterns]

---

### Cash Flow & Payment Terms

- **Payment Structure**: [Upfront / Milestone / Reimbursement / Mixed / Unknown]
- **Advance Payment Available**: [Yes / No / Unknown]
- **Notes**: [Details about payment schedule or cash flow implications]

---

### Why This Matches (or Doesn't)

[Detailed explanation of relevance to the organization, referencing specific elements from the Organization Research and Funding Need files]

**Alignment with Organization**:
- [Point 1 - how it aligns with org's sector/focus]
- [Point 2 - how it aligns with org's geography]
- [Point 3 - how it aligns with org's target populations]
- ...

**Alignment with Funding Priorities**:
- [How this grant matches the organization's stated funding priorities from the Funding Need file]

**Potential Concerns**:
- [Any concerns about fit]

---

### Red Flags & Considerations

[List any potential issues, deal-breakers, or important considerations]

- ⚠️ [Red flag 1]
- ⚠️ [Red flag 2]
- ...

---

### Linked Documents

| Document Type | URL |
|---------------|-----|
| [Application Form / Guidelines / FAQ / Other] | [URL] |
| [Type] | [URL] |

---

### Extraction Notes

- **Extraction Confidence**: [High / Medium / Low]
- **Missing Information**: 
  - [What key information couldn't be found]
  - [What key information couldn't be found]
- **Source Language**: [Language of the grant page]

---

# Important Notes

- Be thorough but concise
- Prioritize accuracy over completeness - if unsure, say so
- ALWAYS provide full extraction even when relevance score is 0 (hard blockers present)
- If the HTML is messy or poorly structured, do your best to extract clean information
- If you encounter errors or cannot parse the content, set extraction confidence to "Low" and explain in missing information
- Be specific and actionable in application process descriptions - avoid vague statements
- **Keep grant titles and funder names in their original language. Translate all other analysis text to English**

# Final Review Step

**BEFORE OUTPUTTING YOUR RESPONSE**, perform this critical review:

1. Review all red flags you've identified
2. Double-check against the HARD BLOCKERS list:
   - Does the page actually offer a grant/funding opportunity? (If not, score MUST be 0, status = "No Active RFP")
   - Does the grant match any organization funding exclusions from the Funding Need file? (If yes, score MUST be 0, status = "Not Eligible")
   - Is the grant closed WITH NO anticipated future cycle? (If yes, score MUST be 0, status = "Closed")
   - Are there geographic exclusions? (If yes, score MUST be 0, status = "Not Eligible")
   - Are there organizational type exclusions? (If yes, score MUST be 0, status = "Not Eligible")
   - Are budget requirements completely incompatible? (If yes, score MUST be 0, status = "Not Eligible")
3. **REMEMBER: If ANY hard blocker is present, relevance score MUST be 0 and category MUST be "Not Eligible"**
4. **EXCEPTION: "Anticipated" and "Invite-Only" grants should NOT have score = 0** - evaluate them based on match quality
5. Ensure red flags clearly identify which hard blocker(s) apply if score is 0
6. Always provide a clear recommended action

Extract and evaluate now.`;

  const prompt5Content = `You are a master grant writer crafting a compelling, donor-centric proposal. Your goal is to create a proposal that positions this as a PARTNERSHIP opportunity for the funder to achieve THEIR goals.

# ========================================
# INPUT INFORMATION (FILL IN BEFORE USE)
# ========================================

**Funder Name:**
<INSERT FUNDER NAME>

**Grant Program Name:**
<INSERT GRANT PROGRAM NAME>

**Grant Webpage URL (for reference):**
<INSERT GRANT WEBPAGE URL>

**Budget Range:**
<INSERT BUDGET RANGE, e.g., "$5,000 - $50,000">

**Project Title:**
<INSERT PROJECT TITLE>

**Project Concept (2-3 paragraphs describing the project idea):**
<INSERT PROJECT CONCEPT>

# ========================================
# ATTACHED FILES
# ========================================

The user has attached files containing:

1. **Organization Research** - Contains all organization details including:
   - Organization name, mission, vision, values
   - Programs and services
   - Track record and achievements
   - Leadership and capacity indicators
   - Geographic context
   - Unique value proposition
   - Previous funders/grants

2. **Funding Need Profile** - Contains:
   - Specialized sector alignment
   - Core funding needs
   - What the organization is looking for
   - What to avoid
   - Funding priorities
   - Budget estimates and timeline
   - Success indicators

3. **Grant Evaluation** (if available) - Contains:
   - Funder's mission, vision, values
   - Funder's strategic priorities
   - Key language/keywords to mirror
   - Thematic focus areas
   - Target groups
   - Geographic focus
   - Evaluation criteria
   - Red flags/considerations

Extract all relevant details from these attached files to write the proposal.

# ========================================
# FUNDER INTELLIGENCE (EXTRACT FROM ATTACHED FILES)
# ========================================

From the Grant Evaluation file, extract and use:

- **Funder's Mission & Vision**: [Use to align proposal language]
- **Funder's Core Values**: [Mirror these throughout the proposal]
- **Funder's Strategic Priorities**: [Ensure project addresses these]
- **Key Language/Keywords to Mirror**: [Use these exact terms in the proposal]
- **Thematic Focus**: [Align project description with these themes]
- **Target Groups**: [Ensure project serves appropriate populations]
- **Geographic Focus**: [Confirm geographic alignment]
- **Evaluation Criteria**: [Address each criterion in the proposal]
- **Red Flags/Considerations**: [Acknowledge and address these]

==================================================
CORE PRINCIPLES (FOLLOW STRICTLY)
==================================================

**PRINCIPLE 1: DONOR-CENTRICITY**
- This is NOT a request for money. It's an INVITATION to partnership.
- Use "you-centric" language: "Your investment enables...", "This partnership allows you to...", "Through your support..."
- Frame everything around what the FUNDER gets to accomplish, not what "we need"
- The funder is the HERO of this story - they have the power to create change

**PRINCIPLE 2: STORY-FIRST APPROACH**
Use the P.A.S.T. → P.A.T.H. → P.O.W.E.R. narrative framework:

P.A.S.T. (The Problem Story)
- P: Present a specific, vivid PROBLEM
- A: Introduce an ARCHETYPE character (a real person experiencing this problem)
- S: Describe their current SITUATION in human terms
- T: Show the TRAJECTORY if nothing changes

P.A.T.H. (The Solution Journey)
- P: Present the PROPOSED solution
- A: Detail the ACTIVITIES that will transform lives
- T: Provide concrete TIMELINE and milestones
- H: Show HOW this specifically helps the archetype

P.O.W.E.R. (The Partnership Ask)
- P: Frame this as a PARTNERSHIP invitation
- O: State measurable OUTCOMES (SMART objectives)
- W: Emphasize WHAT the funder enables
- E: Show EXPECTED ripple effects beyond direct beneficiaries
- R: Specify RESOURCES requested and their impact

**PRINCIPLE 3: SPECIFICITY IS CREDIBILITY**
- Use real names, places, and numbers (from the attached organization profile)
- Avoid generic phrases like "holistic approach" or "community-driven"
- Every claim should be backed by evidence or specific example
- SMART objectives: Specific, Measurable, Achievable, Relevant, Time-bound

**PRINCIPLE 4: MIRROR THE FUNDER'S LANGUAGE**
- Use terminology from funder's materials (extracted from Grant Evaluation file)
- Echo their strategic priorities in your narrative
- Align with their theory of change

==================================================
PROPOSAL GENERATION TASK
==================================================

Generate a complete grant proposal with the following sections. Each section should be ready to submit (not placeholders or templates).

**PROPOSAL STRUCTURE**:

Write a flowing, cohesive grant proposal document in markdown format. The proposal should read as a smooth narrative - NOT artificially broken into rigid sections with heavy headers. 

The narrative should naturally weave together:

1. **Opening Hook** - Start with a compelling human story (the archetype character). Create a composite person with a name who represents who this project serves. Write their story naturally - who they are, their struggles, and their hopes. This should immediately capture the reader's heart.

2. **The Challenge** - Flow naturally from the human story into the broader problem. Use data to contextualize, but keep the human element central. Show why this matters NOW and connect to funder's concerns.

3. **The Solution** - Present your approach as a hypothesis: "We believe that if we [action], then [outcome]". Show how this transforms lives. Include specific activities and timeline woven into the narrative.

4. **Why This Partnership** - Establish credibility through story, not lists. Show your track record through examples. Frame as a partnership invitation. Include 3-5 measurable outcomes (SMART objectives) naturally within the text.

5. **The Investment** - Tell the story behind the budget. Link costs to outcomes. Address sustainability. End with a clear, compelling ask.

**IMPORTANT WRITING GUIDELINES**:
- Use markdown formatting (headers, bold, lists) sparingly and only where they genuinely aid readability
- Avoid rigid "Section 1, Section 2" structures - let ideas flow naturally
- Use ## headers only for major transitions, not for every topic
- The proposal should feel like it was written by a skilled human writer, not generated
- Total length: 2,000-3,000 words

==================================================
OUTPUT FORMAT
==================================================

Return the proposal in Markdown format with this structure:

---

# Grant Proposal: [Project Title]

**Submitted to**: [Funder Name] - [Grant Program Name]
**Submitted by**: [Organization Name]
**Requested Amount**: [Budget amount]
**Project Duration**: [Timeline]

---

[The flowing narrative proposal goes here, following the structure above]

---

## Proposal Metadata

### Alignment Assessment

- **Funder Alignment Score**: [0-100] / 100
- **Alignment Strengths**:
  - [Strength 1]
  - [Strength 2]
  - [Strength 3]
- **Alignment Gaps/Considerations**:
  - [Gap or consideration 1]
  - [Gap or consideration 2]

### Suggested Improvements

If the proposal could be strengthened with additional information:

- [Area that could be strengthened 1]
- [Area that could be strengthened 2]
- [Area that could be strengthened 3]

---

==================================================
STYLE GUIDELINES
==================================================

1. **Voice**: Confident but humble; partnership-focused, not needy
2. **Tone**: Warm, human, specific - avoid corporate jargon
3. **Structure**: Use short paragraphs, clear transitions
4. **Language**: Mirror funder's terminology throughout (use keywords extracted from Grant Evaluation file)
5. **Focus**: Every sentence should either advance the story or strengthen the ask

==================================================
FINAL CHECKLIST BEFORE OUTPUT
==================================================

Before generating the proposal, verify:

☐ Have I extracted the funder's mission, values, and priorities from the Grant Evaluation file?
☐ Have I identified the key language/keywords to mirror?
☐ Have I understood the organization's track record and unique value from the Organization Research file?
☐ Have I aligned the project concept with the funder's thematic focus?
☐ Have I addressed potential red flags noted in the Grant Evaluation?
☐ Does the proposal use donor-centric language throughout?
☐ Is there a compelling archetype character in the opening?
☐ Are there 3-5 SMART objectives included?
☐ Does the budget align with the funder's stated range?
☐ Does the proposal flow as a narrative, not a rigid form?

Generate the proposal now.`;

  const prompts = [
    {
      number: 1,
      title: 'Organization Research',
      instructions: (
        <div className="space-y-3">
          <p className="text-neutral-700">
            <strong>What this prompt does:</strong> This prompt helps you conduct comprehensive research on an organization to understand their profile, funding history, and grant eligibility.
          </p>
          <p className="text-neutral-700">
            <strong>Before using:</strong> You need to fill in two placeholders in the prompt:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700">
            <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT ORGANIZATION NAME&gt;</code> - Replace with the actual organization name</li>
            <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT WEBSITE&gt;</code> - Replace with the organization's website URL</li>
          </ul>
          <p className="text-neutral-700">
            <strong>Important:</strong> After running this prompt, <strong>save the output as a text file</strong> (e.g., "organization-research.txt"). You'll need to attach this file when using prompts #2, #3, #4, and #5.
          </p>
        </div>
      ),
      content: prompt1Content,
      dependencies: []
    },
    {
      number: 2,
      title: 'Funding Need Profile',
      instructions: (
        <div className="space-y-3">
          <p className="text-neutral-700">
            <strong>What this prompt does:</strong> This prompt helps define the organization's funding needs and priorities based on their profile.
          </p>
          <p className="text-neutral-700">
            <strong>Before using:</strong> You must attach the output from Prompt #1 (Organization Research) as a file. The prompt will extract information from that file automatically.
          </p>
          <p className="text-neutral-700">
            <strong>Important:</strong> After running this prompt, <strong>save the output as a text file</strong> (e.g., "funding-need.txt"). You'll need to attach this file when using prompts #3, #4, and #5.
          </p>
        </div>
      ),
      content: prompt2Content,
      dependencies: ['Output from Prompt #1: Organization Research (save as .txt file)']
    },
    {
      number: 3,
      title: 'Grants Search',
      instructions: (
        <div className="space-y-3">
          <p className="text-neutral-700">
            <strong>What this prompt does:</strong> This prompt searches for grant opportunities that match the organization's profile and funding needs.
          </p>
          <p className="text-neutral-700">
            <strong>Before using:</strong> You must attach TWO files:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700">
            <li>Output from Prompt #1: Organization Research (saved as .txt file)</li>
            <li>Output from Prompt #2: Funding Need Profile (saved as .txt file)</li>
          </ul>
          <p className="text-neutral-700">
            <strong>Important:</strong> After running this prompt, <strong>save the output as a text file</strong> (e.g., "grants-search-results.txt"). This list of grants can be used for further evaluation.
          </p>
        </div>
      ),
      content: prompt3Content,
      dependencies: [
        'Output from Prompt #1: Organization Research (save as .txt file)',
        'Output from Prompt #2: Funding Need Profile (save as .txt file)'
      ]
    },
    {
      number: 4,
      title: 'Grant Evaluator',
      instructions: (
        <div className="space-y-3">
          <p className="text-neutral-700">
            <strong>What this prompt does:</strong> This prompt evaluates a specific grant opportunity to determine how well it matches the organization and provides detailed analysis.
          </p>
          <p className="text-neutral-700">
            <strong>Before using:</strong> You need to:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1 text-neutral-700">
            <li>Fill in three placeholders at the top of the prompt:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT CURRENT DATE: YYYY-MM-DD&gt;</code> - Today's date</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT GRANT NAME&gt;</code> - The name of the grant you're evaluating</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT GRANT WEBPAGE URL&gt;</code> - The URL of the grant's webpage</li>
              </ul>
            </li>
            <li>Attach TWO files:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Output from Prompt #1: Organization Research (saved as .txt file)</li>
                <li>Output from Prompt #2: Funding Need Profile (saved as .txt file)</li>
              </ul>
            </li>
          </ol>
          <p className="text-neutral-700">
            <strong>Important:</strong> After running this prompt, <strong>save the output as a text file</strong> (e.g., "grant-evaluation.txt"). You can optionally attach this when using Prompt #5 to write a proposal.
          </p>
        </div>
      ),
      content: prompt4Content,
      dependencies: [
        'Output from Prompt #1: Organization Research (save as .txt file)',
        'Output from Prompt #2: Funding Need Profile (save as .txt file)'
      ]
    },
    {
      number: 5,
      title: 'Proposal Writer',
      instructions: (
        <div className="space-y-3">
          <p className="text-neutral-700">
            <strong>What this prompt does:</strong> This prompt writes a complete grant proposal tailored to a specific funder and project.
          </p>
          <p className="text-neutral-700">
            <strong>Before using:</strong> You need to:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1 text-neutral-700">
            <li>Fill in six placeholders at the top of the prompt:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT FUNDER NAME&gt;</code> - The name of the funding organization</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT GRANT PROGRAM NAME&gt;</code> - The specific grant program name</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT GRANT WEBPAGE URL&gt;</code> - URL to the grant program page</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT BUDGET RANGE&gt;</code> - The budget range (e.g., "$5,000 - $50,000")</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT PROJECT TITLE&gt;</code> - Your project title</li>
                <li><code className="bg-neutral-200 px-1 rounded">&lt;INSERT PROJECT CONCEPT&gt;</code> - 2-3 paragraphs describing your project idea</li>
              </ul>
            </li>
            <li>Attach files:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Output from Prompt #1: Organization Research (saved as .txt file) - <strong>Required</strong></li>
                <li>Output from Prompt #2: Funding Need Profile (saved as .txt file) - <strong>Required</strong></li>
                <li>Output from Prompt #4: Grant Evaluation (saved as .txt file) - <strong>Optional but recommended</strong> (helps align proposal with funder's priorities)</li>
              </ul>
            </li>
          </ol>
          <p className="text-neutral-700">
            <strong>Important:</strong> After running this prompt, <strong>save the output as a text file</strong> (e.g., "proposal.txt").
          </p>
        </div>
      ),
      content: prompt5Content,
      dependencies: [
        'Output from Prompt #1: Organization Research (save as .txt file) - Required',
        'Output from Prompt #2: Funding Need Profile (save as .txt file) - Required',
        'Output from Prompt #4: Grant Evaluation (save as .txt file) - Optional but recommended'
      ]
    }
  ];

  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Prompt Library
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Access our collection of AI prompts designed to help you research organizations, find grants, evaluate opportunities, and write winning proposals.
          </p>
        </div>

        {/* Special Offer Promo */}
        <div className="bg-gradient-to-r from-teal-50 to-amber-50 border-2 border-teal-500 rounded-lg shadow-lg mb-12 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block mb-3">
                  <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    Webinar Exclusive
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                  Special Offer: 25% Off Annual Plan
                </h2>
                <p className="text-neutral-700 mb-4 max-w-2xl">
                  Thank you for joining <em>"Building Movement Infrastructure: EU Grant Management and Digital Security for Advocacy"</em>. 
                  Get unlimited grant search, AI-powered matching, and priority support for just <strong>$333/year</strong> (regularly $444).
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-teal-700">$333</span>
                    <span className="text-neutral-500 line-through text-lg">$444</span>
                  </div>
                  <span className="bg-amber-200 text-amber-900 text-xs font-semibold px-2 py-1 rounded">
                    25% OFF
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-4">
                  Start with a <strong>7-day free trial</strong> — cancel anytime
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://app.engrant.eu/webinar-offer"
                  className="btn-primary text-white px-8 py-3 rounded-full font-semibold inline-block shadow-md hover:shadow-lg transition-all duration-200 text-center whitespace-nowrap"
                >
                  Claim Your Discount
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Overview */}
        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">📋 Recommended Workflow</h2>
          <div className="space-y-2 text-neutral-700">
            <p className="font-semibold">Follow these prompts in order for best results:</p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong>Organization Research</strong> → Save output as .txt file</li>
              <li><strong>Funding Need Profile</strong> → Attach Prompt #1 output, save result as .txt file</li>
              <li><strong>Grants Search</strong> → Attach Prompts #1 & #2 outputs, save result as .txt file</li>
              <li><strong>Grant Evaluator</strong> → Attach Prompts #1 & #2 outputs, fill placeholders, save result as .txt file</li>
              <li><strong>Proposal Writer</strong> → Attach Prompts #1, #2, and optionally #4 outputs, fill placeholders, save result as .txt file</li>
            </ol>
            <p className="mt-4 text-sm text-neutral-600 italic">
              💡 Tip: Always save each prompt's output as a .txt file before moving to the next step. This ensures you can attach the required files for subsequent prompts.
            </p>
          </div>
        </div>

        {/* Prompts List */}
        <div className="space-y-8">
          {prompts.map((prompt) => (
            <PromptCard
              key={prompt.number}
              promptNumber={prompt.number}
              title={prompt.title}
              instructions={prompt.instructions}
              promptContent={prompt.content}
              dependencies={prompt.dependencies}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PromptLibraryPage;

export const Head = () => (
  <>
    <title>Prompt Library | Engrant</title>
    <meta 
      name="description" 
      content="Access our collection of AI prompts for organization research, grant discovery, evaluation, and proposal writing." 
    />
  </>
);
