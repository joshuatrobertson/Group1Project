<h1 align="center">
<center>
<img src="report/images/image001_logo.png" alt="drawing" width="150"/>
<br>
DistractAbility
</h1>

<h4 align="center">A distraction-infested memory game to highlight the negative implications of coronavirus restrictions on people's attentional abilities.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/%40angular%2Fcore"><img src="https://badge.fury.io/js/%40angular%2Fcore.svg" alt="npm version" 	height="18"></a>
</p>

# Team
<table style="width:100%">
    <tr>
        <td><center><img src="report/images/image002_alan.jpg" width="100"></center></td>
        <td><center><img src="report/images/image003_efan.png" width="100"></center></td>
        <td><center><img src="report/images/image004_josh.jpg" width="100"></center></td>
        <td><center><img src="report/images/image005_ella.jpg" width="100"></center></td>
        <td><center><img src="report/images/image006_keane.jpeg" width="100"></center></td>
    </tr>
    <tr>
        <td colspan="1"><center>Alan (Backend)</center></td>
        <td colspan="1"><center>Efan (Backend)</center></td>
        <td colspan="1"><center>Joshua (Frontend)</center></td>
        <td colspan="1"><center>Ella (Frontend)</center></td>
        <td colspan="1"><center>Keane (DevOps)</center></td>
    </tr>
</table>

# Introduction
## Abstract
In this project we propose **DistractAbility**, a single page application designed to highlight the problem of the deleterious effects of lockdown and general coronavirus restrictions on people’s attentional abilities, and the negative consequences entailed by this increased susceptibility to distraction, for instance on people's quality of work or study. To highlight this important issue in a way that is fun and interactive, we have designed a brain-training game with a twist. The user of our application plays two rounds of a simple brain training task, each round within a time limit of two minutes. The first round is played without distraction while the second round is permeated with increasing levels of distracting stimuli, making it harder to successfully complete the task. At the end, the user is shown their scores for each round. If the presence of distractions affected the user's ability to focus on correctly completing the mind games, the second score can be expected to be lower than the first.


## Repository Structure
## Project Objectives
## Objectives
## Video

# Background and Motivation

## Literature Review

### Context ###

&nbsp;&nbsp; By December 2019, the outbreak of a SARS-associated coronavirus (designated  COVID‐19, short for coronavirus 2019) had spread from Wuhan, China across the globe and was declared a pandemic by the World Health Organization (WHO) in March 2020 (WHO, 2020; Ghebreyesus, 2020). In that month nineteen European countries entered national lockdowns, most of which remained in place for several months (Hirsch, 2021). As is now common experience, these lockdowns entailed closure of schools, universities and all non-essential shops and services; employees were advised to work from home (WFH) wherever possible, with many of those unable to WFH put on temporary income schemes such as the British Furlough scheme or out of work entirely; and most countries also saw a ban on all non-essential movement (Hirsch, 2021). All of a sudden countless individuals had to quickly adapt to entirely new ways of working or studying remotely and juggle this with childcare, personal relationships, household chores, and family demands in general. This was experienced in the context of personal loss or the constant possibility of loss or ill-health, difficulty accessing standard medical care, extreme social isolation, job insecurity and joblessness, economic hardship, and heightened global social injustices and social unrest. We can surely expect that people have found it more difficult to concentrate in these unprecedented times. 

  In this literature review we investigate two major questions. First, has the pandemic impacted people’s attention? Here we distinguish between (i) people feeling and believing that their attentional abilities have worsened since the onset of the pandemic, and (ii) the actual impact on people’s attentional abilities, which we measure in terms of productivity. The second question we ask is why many people have suffered increased distractibility in the context of COVID-19 and resultant restrictions? Here we make a distinction between change and continuity: we categorise as ‘change’ novel forces affecting people’s attention that exist as a direct result of the pandemic; and we categorise as ‘continuity’ factors which the pandemic may have worsened, but that nonetheless existed prior to and independently of COVID-19. Both questions are asked in order to inform the design of our application. 


### Methodology ###

  We review a host of academic papers published in reputable journals, but we also review non-academic articles, columns and opinion pieces published in popular newspapers such as the New York Times and blog pages. We justify our decision to do so on account of two salient factors. First, the brief timeline of events necessitates that we review some relatively informal sources simply to gather enough evidence. Our application is meant to highlight the impacts of the increase in concentration difficulties since the onset of COVID-19, and since the WHO only declared it a pandemic in March 2020, the non-academic sources referenced herein contain strong anecdotal evidence for greater attentional difficulties that simply has not made its way into academic literature by the time of writing this report. Second, lockdown-induced attentional difficulties evidently have both quantitative and qualitative negative implications and it is important to account for both – hence we are investigating both whether people feel more distracted and the actual impact of distraction. While academic literature is arguably the most authoritative kind of source when it comes to quantifying the effect of lockdown on, for example, the productivity of people working from home (WFH), at the present moment non-academic sources seem to be richer in personal testimonies of how individuals have suffered severe distractibility and are “feeling scatterbrained” (Purtill, 2020). In short, if people are experiencing attentional difficulties specifically related to lockdown measures then their testimony is sufficient evidence of a problem. 


### Has COVID-19 and the resultant restrictions impacted people’s concentration? ###

  From the literature, it is clear that many people feel more distracted and believe their attentional abilities have diminished since the onset of the pandemic. But since it is always possible for individuals to develop a negative view of themselves and their abilities which does not reflect reality, we also quantify the actual impact of the pandemic on people’s attention. The proper, reliable way of assessing the actual impact would be to have conducted mass psychometric testing before and after the onset of the pandemic. We were not able to find any examples in the literature of such a study being conducted, so we have chosen productivity as our metric for assessing the actual impact of people’s perceived attentional difficulties. We found sufficient evidence to conclude that, for many, perceived attentional difficulties have translated into reduced productivity. This finding informed the design of our application in two major ways. First, the user’s scores for each of the two rounds are presented to the user side-by-side at the end of the second round only, in order to highlight the contrast between their score without distraction and their score with distraction – the latter of which can be expected to be lower if the distractions affected their ability to complete the game. Secondly, the evidence that this finding holds for a large number of people led us to build statistics into our application; now the user is able to compare their scores to the average scores of other users.



**People believe they are more easily distracted**

  From February to March of 2020 there was a three-hundred per cent increase in people searching “how to get your brain to focus”, a one-hundred per cent increase in “how to focus better”, and a sixty per cent rise in “how to increase focus” (Manavis, 2020). In response to a recent survey by S&P Global Market Intelligence, fifty-five per cent of respondents reported feeling both less productive and less engaged when WFH (Lawson, 2020). Penn Medicine, The Irish Times, and professional psychiatrists such as Jessi Gold, M.D., M.S. have all noted the phenomenon of “pandemic brain fog” (Messinger, 2020; Keogh, 2020; Gold et al, 2020). Meanwhile columns and opinion pieces in The New York Times abound with examples of people feeling uncharacteristically “scatterbrained,” citing the stressors of the pandemic and working from home as the cause of their disrupted attention, memory, breathing and sleeping (Purtill, 2020). 

  There is, however, some opposition to the mainstream view that coronavirus and the resultant restrictions have negatively impacted people’s attention. For instance, Mattern, Lansmann and Hüllmann conducted a four-week diary study in April and May 2020 with 37 participants from a German university in an attempt to examine whether enforced working from home (EWFH) due to COVID-19 increases perceived stress levels or causes a feeling of communication overloaded – both factors that other sources in the literature cite as causes of perceived attentional difficulties (Mattern, 2021). Their data suggested that EWFH does not increase participants’ stress levels nor does it cause communication overloaded. 

  Nonetheless, there are numerous flaws in the methodology used by Mattern, Lansmann and Hüllmann that arguably make this an unreliable source for assessing the extent to which people have generally experienced difficultly directing and/or sustaining attention in the context of national lockdowns and other coronavirus restrictions. First, the sample group is hardly representative. The authors recruited study participants via a mailing list comprising staff members – but not students – of the business and economics faculty at one, single German university. As far as we can tell from the paper, the study sample was not controlled for any of the following categories: age, ethnicity, orientation, gender identification, income threshold, educational background,  whether they lived in urban or rural dwellings, nor whether they had school-age children or other caring responsibilities. The nature of these participants’ work is also likely to be very similar, given that all participants were recruited from the same faculty. Overall, the unrepresentativeness of the study sample is arguably so pronounced that the data can already be viewed as a wholly unreliable indication of the extent to which people across the world have experienced heightened attentional difficulties compared with pre-pandemic circumstances. 

  There are additional reasons not to assume that the data represents swathes of the global population not beset by increased difficulties in concentrating. Note that the study was conducted between April and May of 2020. As will be expanded upon in the following section, Forbes found that the first few months of the pandemic saw the phenomenon of “panic productivity” which Forbes and analysts at S&P Global Market Intelligence all found “evaporating” as the pandemic wore on (Brower, 2021; Lawson, 2020). It is thus reasonable to speculate that the study participants’ perceived stress and feelings of communication overload may have increased alongside the global trend since the conclusion of the dairy study. Clearly, there is ample evidence demonstrating the extent to which many individuals believe their attentional abilities have diminished since the onset of the pandemic. But how far have these perceived difficulties actually impacted people?



**Impact of attentional difficulties on productivity**

  One might assume that people working or studying from home would be more productive, without factors such as a tiring commute or the need to move between different locations for meetings, lectures and the like during the working day. Indeed, much of the literature claims the world of work has been “revolutionised”  by the pandemic in light of skyrocketing productivity since employees began WFH (Waters, 2020). On the other hand, the Bank of England’s chief economist, Andy Haldane, says there is no evidence that WFH has boosted productivity in the United Kingdom nor that it will do in the long run (Elliot, 2020). The literature is truly divided and it is astonishing how apparently contradictory the statistics are. Thankfully, a recent Forbes analysis of productivity reports since the onset of the pandemic brings clarity: overall and by this point in the pandemic productivity is negatively impacted by WFH in the context of COVID-19. We will now briefly review the literature in support of increased productivity, then we will use Forbes’ report to explain why such reports are generally misleading and provide evidence for decreased productivity. 

  Numerous sources report that productivity has increased since employees started WFH due to coronavirus restrictions. A report by Deloitte, for which research was conducted between 14th – 19th May 2020, found that fifty-five per cent of workers believed their colleagues were at least, if not more, productive by May 2020 than before the first national lockdown in the UK (Deloitte, 2020). We can trust the reliability of this study: Participants were recruited from a nationally representative quota sample of 2,213 UK adults, filtered to a sample of 1,321 workers aged 16-75; and the data were weighted to the known offline population proportions for age within gender, employment status and social grade as well as government office region. However, the findings of this report concern people’s opinions of their colleagues’ productivity – opinions which may be inaccurate, especially at a time when these very people are isolated from their colleagues. Note also that the data was collected in May 2020 – relatively early on in the pandemic. 

  A survey of 996 employers based in Great Britain and Western Europe, conducted by Willis Towers Watson in April 2020, found no significant change in employee productivity since the onset of the pandemic (Franklin, 2020). Similarly though to the Deloitte report, this survey was conducted in April 2020. As we shall now go on to explain, Forbes finds that these early reports of increased or stable productivity explained the initial spike in productivity that was short-lived as the pandemic wore on.



**Productivity is down**

  In January 2021, Forbes published their analysis of productivity reports since the onset of the pandemic (Brower, 2021). It was found that many of the reports of increased productivity were early in the pandemic and can be seen as evidence of initial “panic productivity” that quickly faded as the duration of the pandemic grew. Analysts at S&P Global Market Intelligence concur that by September 2020,  early productivity gains were already “evaporating” (Lawson, 2020). 

  Furthermore, many of the productivity reports were themselves flawed in their methodology. For instance, productivity is meant to be a measure of how much people get done in a period of time, but Forbes points out that many of the early WFH productivity reports did not account for the increased hours people were working. In the United States, for example, the average workday for many companies grew by three hours once lockdown measures were introduced (Brower, 2021; McKeever, 2020). Presumably many employees worked extra hours to make up for what they perceived as time lost to unproductivity, and potentially due to distraction. Forbes cites the proximity of work to home as a contributing factor to hampered productivity. Moreover, time spent doing things that would not previously have counted as ‘work’ are now counting towards productivity metrics. For instance, most employee communication has tended to take place over Zoom or Teams since coronavirus restrictions began, and since many companies log total employee Zoom hours as ‘work’, the early reports of increased productivity tended to include any and all inter-colleague communication in their sum of what counted as ‘work’. Previously such communication was much less likely to be logged as ‘work’ given that it often took place more informally or spontaneously, such as a face-to-face chat before a meeting. 

  Forbes also identified a flaw in the early productivity reports insofar as many did not control for the nature of the work being done. In terms of the complexity of the work, a recent study demonstrated that people might be more productive on rote, routine or repetitive work, but less so on work that was complex, urgent or required problem solving. People’s ability to complete administrative responsibilities may not have been hampered, but their productivity for work that required greater sophistication did take a hit. People were also less productive than pre-pandemic when their tasks involved collaboration, co-creation or generative work – as Forbes notes, just consider the mantra of 2020, “You’re on mute.”

  Overall, Forbes’ findings explain why the early reports of increased productivity are not a reliable indication of whether productivity has been negatively impacted since the onset of the pandemic. Similarly, as early as May 2020, the Office for National Statistics warned that the pandemic poses significant challenges in accurately measuring productivity; these include a range of issues affecting output and input data, and statistical issues such as seasonal adjustment of time series data (Newman et al, 2020). Between the summer of 2020 and the present moment (April 2020) the consensus in the literature has been that productivity is down since the onset of the pandemic.

  Researchers at The Australian National University (ANU) reveal that Australians have lost 167 hours' worth of work between March and October due to the pandemic. This equates to over $5,000 each, and $47 billion for the economy as a whole (Biddle & Gray, 2020). In December 2020 the National Bureau of Economic Research (NBER) published their analysis of the impact of Covid-19 on productivity in the United Kingdom (Bloom et al, 2020). The authors found that the pandemic reduced total factor productivity (TFP) in the private sector by approximately 5% in 2020 Q4. The authors also predict a 1% reduction in TFP the medium term and additional long-term negative impacts of the pandemic on productivity. Their report was later published by the Bank of England (Bloom et al, 2020, BoE). Then in early 2021, McKinsey found that the pandemic had a generally negative impact on short-term accumulation of physical capital, which they see as a crucial element that typically drives growth in productivity (Mischke et al, 2021).

  Admittedly, correlation is not necessarily causation. People may feel that their attention has been negatively impacted by the pandemic while their reduced productivity is due to other factors, for instance, insufficient technical infrastructure to WFH to the same standard as when they worked out of the house. Still, the trend is sufficiently pronounced for us to conclude that, at least for many, perceived attentional difficulties brought on by the Coronavirus pandemic does have real, negative implications on their productivity. In fact, research by Russo et al, which examined the predictors of wellbeing and productivity due to governmental coronavirus restrictions on workplaces, then found that boredom and distractions were related to lower productivity (Russo et al, 2021). This study was comprehensive; it was a longitudinal study, meaning the authors collected initial data and then returned at a later date to obtain comparison data. A complimentary study by Ralph et al, which surveyed over 2,000 software developers from across the world, found not only that the pandemic has had a negative effect on both wellbeing and productivity, but importantly, that the two areas of productivity and wellbeing were closely related (Ralph et al, 2020). Ralph et al also found that that women were expected to devote more time to housework and childcare than men during lockdown. This finding is supported by Feng & Savani’s study of gender differences on perceived productivity and job satisfaction for couples where both parents worked and had been forced to remote-work since the start of the pandemic; the authors found no significant differences in perceptions prior to lockdown, but after lockdown women reported lower levels of perceived productivity and job satisfaction (Feng & Savani, 2020). A report by Tap’d Solutions similarly found that fear of the pandemic and home ergonomics were correlated to lower wellbeing and productivity and that the demographic groups of women, parents and disabled workers may be disproportionately affected by recent work changes (Tap’d, 2020).



**Relevance to our application**

  The evidence in the literature that many individuals feel less able to focus in the context of the Coronavirus pandemic, and that this has had real, negative impacts on people’s productivity, is undoubtedly a serious problem with globally significant implications for the worldwide economy and citizen wellbeing. 



### Literature Review Bibliography 

**Primary Sources**

N. Biddle and M. Gray, "Tracking outcomes during the COVID-19 pandemic (October 2020) – Reconvergence", ANU Centre for Social Research and Methods, pp. 1-15, 2020. Available: https://csrm.cass.anu.edu.au/sites/default/files/docs/2020/11/Tracking_wellbeing_outcomes_during_the_COVID-19_pandemic_October_2020_PDF.pdf. [Accessed 14 April 2021].

N. Bloom, P. Bunn, P. Mizen, P. Smietanka and G. Thwaites, "The Impact of COVID-19 on Productivity", NBER Working Paper Series, December 2020. Available: https://www.nber.org/system/files/working_papers/w28233/revisions/w28233.rev0.pdf. [Accessed 14 April 2021].

N. Bloom et al, "Staff Working Paper No. 900", Bank of England, 2020. Available: https://www.citethisforme.com/ [Accessed 14 April 2021].

T. Brower, "Think Productivity With Work From Home Is Improving? Think Again. Here’s What You Must Know", Forbes, 2021. Available: https://www.forbes.com/sites/tracybrower/2021/01/17/think-productivity-with-work-from-home-is-improving-think-again-heres-what-you-must-know/?sh=162ef3ab2d67 [Accessed: 11- Apr- 2021].

Deloitte, "Working during lockdown: The impact of COVID-19 on productivity and wellbeing", Deloitte United Kingdom, 2020. [Online]. Available: https://www2.deloitte.com/uk/en/pages/consulting/articles/working-during-lockdown-impact-of-covid-19-on-productivity-and-wellbeing.html. [Accessed: 13- Apr- 2021].

L. Elliot, "Working from home is proving to be a revolution in our way of life", The. Guardian, 2020. Available: https://www.theguardian.com/business/2020/oct/26/working-from-home-is-proving-to-be-a-revolution-in-our-way-of-life [Accessed:  13- Apr- 2021].

Z. Feng and K. Savani, "Covid-19 created a gender gap in perceived work productivity and job satisfaction: implications for dual-career parents working from home", Emerald Insight: Gender Management, 7 September, 2020. ISSN: 1754-2413. Available: https://www.emerald.com/insight/content/doi/10.1108/GM-07-2020-0202/full/html. [Accessed 14 April 2021].

N. Franklin, "Employee productivity proves remarkably resilient during pandemic", Insight., 2020. Available: https://workplaceinsight.net/employee-productivity-proves-remarkably-resilient-during-pandemic/ [Accessed: 14- Apr- 2021].

J. Gold, M.D., M.S., "The ‘Covid Cloud’ Is Real", 2020. [Online]. Available: https://www.instyle.com/lifestyle/covid-cloud-concentration-memory-issues. [Accessed: 11- Apr- 2021].

O. Keogh, "Pandemic-induced ‘brain fog’ is result of cognitive overload", The Irish Times, 2020. Available: https://www.irishtimes.com/business/work/pandemic-induced-brain-fog-is-result-of-cognitive-overload-1.4436434 [Accessed: 11-Apr-2021].

S. Künn, C. Seel and D. Zegners, "Cognitive performance in the home office—What professional chess can tell us", IZA World of Labor, 2020. Available: https://wol.iza.org/opinions/cognitive-performance-in-the-home-office?utm_source=Adestra&utm_medium=email&utm_content=Cognitive%20performance%20in%20the%20home%20office%E2%80%94What%20professional%20chess%20can%20tell%20us&utm_campaign=IZA%20WoL%20Sept%20monthly%20newsletter [Accessed: 11- Apr- 2021].

T. Lawson, "Work-from-home productivity gains seen evaporating as pandemic grinds on", S&P Global Market Intelligence, 2020. Available: https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/work-from-home-productivity-gains-seen-evaporating-as-pandemic-grinds-on-60119373 [Accessed: 11- Apr- 2021].

J. Mattern, S. Lansmann and J. Hüllmann, "It’s not that bad! Perceived stress of knowledge workers during enforced working from home due to COVID-19", 16th International Conference on Wirtschaftsinformatik, 2021. [Online]. Available: https://www.joschka-huellmann.net/publications/2020-12-22-draft-COVID-19-and-stress_camera-ready.pdf. [Accessed: 12- Apr- 2021].

S. Manavis, "Why can’t we focus during this pandemic?", New Statesman, 2020. Available: https://www.newstatesman.com/science-tech/coronavirus/2020/05/how-focus-concentration-pandemic-brain-motivation-apps-pomodoro [Accessed: 11-Apr-2021].

V. McKeever, "Coronavirus lockdowns are making the working day longer for many", CNBC: Make It, 2020. [Online]. Available: https://www.cnbc.com/2020/03/30/coronavirus-lockdowns-are-making-the-working-day-longer-for-many.html. [Accessed: 11- Apr- 2021].

H. Messinger, "Coping with COVID Stress: From Pandemic Brain Fog to Building (and Studying) Resilience", Penn Medicine News, 2020. Available: https://www.pennmedicine.org/news/news-blog/2020/june/coping-with-covid-stress [Accessed: 11-Apr-2021].

J. Mischke et al., "Will productivity and growth return after the COVID-19 crisis?", McKinsey Global Institute, 2021. Available: https://www.mckinsey.com/industries/public-and-social-sector/our-insights/will-productivity-and-growth-return-after-the-covid-19-crisis [Accessed 14 April 2021].

S. Newman, S. Zella and R. Heys, "Coronavirus and the effects on UK productivity measures", Office for National Statistics, 2020. Available: https://www.ons.gov.uk/economy/economicoutputandproductivity/productivitymeasures/articles/coronavirusandtheeffectsonukproductivitymeasures/2020-05-19  [Accessed: 11- Apr- 2021].

C. Purtill, "Feeling Scatterbrained? Here’s Why (Published 2020)", Nytimes.com, 2021. [Online]. Available: https://www.nytimes.com/2020/04/09/us/quarantine-mental-health-gender.html. [Accessed: 11- Apr- 2021].

P. Ralph et al., "Pandemic programming", Empirical Software Engineering, vol. 25, no. 6, pp. 4927-4961, 2020. Available: https://link.springer.com/article/10.1007/s10664-020-09875-y. [Accessed 14 April 2021].

D. Russo, P. Hanel, S. Altnickel and N. van Berkel, "Predictors of Well-being and Productivity among Software Professionals during the COVID-19 Pandemic -- A Longitudinal Study", Cornell University: Empirical Software Engineering, 24 January, 2021. Available: https://arxiv.org/abs/2007.12580. [Accessed 14 April 2021].

"Tap'd Resilience White-paper: Building Resilience in your Organisation, your Leaders and your Teams", Tap'd Solutions, 2020. [Online]. Available: https://tapdsolutions.com/wp-content/uploads/2020/11/TAP_Resilience_WhitePaper_2020.pdf.  [Accessed: 14- Apr- 2021].

R. Waters, "The work-from-home revolution is only just beginning," The Financial Times, 2020. Available: https://www.ft.com/content/829208c1-2f2c-488f-9b92-95fe234c32af [Accessed:  13- Apr- 2021].



**Secondary Sources**

T. A.,  Ghebreyesus. WHO Director‐General's opening remarks at the media briefing on COVID‐19. Geneva, Switzerland: World Health Organization, 2020. Available: https://www.who.int/dg/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19-11-march-2020 [Accessed: 12-Apr-2021].

C. Hirsch, "Europe’s coronavirus lockdown measures compared", Politico, 2020. Available: https://www.politico.eu/article/europes-coronavirus-lockdown-measures-compared/  [Accessed: 12-Apr-2021].

WHO, "Severe Acute Respiratory Syndrome (SARS)", Who.int, 2020. [Online]. Available: https://www.who.int/health-topics/severe-acute-respiratory-syndrome#tab=tab_1. [Accessed: 12- Apr- 2021].






## Current Industry Review



## Problem Definition


# System Implementation
## System Design Overview
### Back End (MongoDB) 
### Middle Tier (Express, Node, RESTful API)
### Front End (Angular)
### Additional Components (think User Authentication)

# UX Design
## Prototyping
## Users and Stakeholders
## UX Approach (Heuristics & Design Methods)
## User Group Definition
## Wireframes/Interaction Flow Diagrams

# Project Management
Team meetings were held three days a week from Week 1 to Week 7. This [log](Meetings/README.md) 
provides a top level summary of all of our standups.
## Agile Methodology
## Team Contributions
## Sprints
This is the link to the [sprints](https://github.com/joshuatrobertson/Group1Project/projects).
## CI/CD Pipeline

# Evaluation
## Design Evaluation

## Unit Testing
## Functional Testing
## User Acceptance Testing
- 'UserTesting.md' documents the end user testing process and explains the structure of the UserTesting directory.
- 'EndUserSurvey_(1).pdf' is the survey that was sent out to end user testing participants during the first round of end user testing.
- 'SurveryWrittenResponses_1.xlsm' is a record of test participants' individual, written responses to the survey questions.
- 'SurveryGraphicalResponses_1.docx' contains screenshots of graphically-represented responses to survey questions that did not collect a written answer.

# Conclusion
## Evaluation
### Working practices
### Project Objectives
### Remote Working (COVID)

## Social / Ethical Implications
## Future Work

# Project Idea

## 1. Sustainadress (*provisional name*) 

In the project we propose Sustainadress, a single page application where the user is tasked with finding the most sustainable outfit of the options provided, sticking within time and budget constraints. This is meant to highlight the environmental impact of fast and unsustainable fashion. We task the user with dressing themselves out of the clothing options provided; after the time limit is up, we reveal whether the user chose the most sustainable outfit overall, out of the options provided. The playful element of this project comes in customizing and dressing up your avatar, and to get a better score on the next playthrough.   

## 3. User stories

- As a user I want to click on new game to  be able to start and play a new game
- As a user I want to click on information so that I can find out about the reasoning for the project
- As a user I want to be able to see the landing page for the website
- As a user I want to be able to see the history of my recent games
- As a user I want to be able to measure the difference in scores between the distraction and non-distraction versions of the game
- As a user I want to be able to compare my scores against past users of the game

## paper_prototype 

- 'old_idea/project 1.pptx' is the prototype we created for our initial idea (Sustainadress).
- 'paper_prorotype.xd' is the prototype for our current idea (Focus on Lock).
- 'prototype_document.docx' is documentation for the current prototype and the thought process behind it.

## report/images

Contains profile photos of each group member.


## site

Contains our site. 
