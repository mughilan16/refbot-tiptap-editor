
export const cslTemplated: { csl: string, name: string, key: string }[] = [
  {
    name: 'APA',
    key: `apa_custom`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only">
      <info>
        <title>American Psychological Association 5th edition</title>
        <title-short>APA (5th ed.)</title-short>
        <id>http://www.zotero.org/styles/apa-5th-edition</id>
        <link href="http://www.zotero.org/styles/apa-5th-edition" rel="self"/>
        <link href="http://rdc.libguides.com/content.php?pid=63487" rel="documentation"/>
        <author>
          <name>Simon Kornblith</name>
          <email>simon@simonster.com</email>
        </author>
        <contributor>
          <name>Bruce D'Arcus</name>
        </contributor>
        <contributor>
          <name>Curtis M. Humphrey</name>
        </contributor>
        <contributor>
          <name>Richard Karnesky</name>
          <email>karnesky+zotero@gmail.com</email>
          <uri>http://arc.nucapt.northwestern.edu/Richard_Karnesky</uri>
        </contributor>
        <contributor>
          <name>Sebastian Karcher</name>
        </contributor>
        <category citation-format="author-date"/>
        <category field="psychology"/>
        <category field="generic-base"/>
        <updated>2012-09-27T22:06:38+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="fr">
        <terms>
          <term name="editor" form="short">
            <single>éd.</single>
            <multiple>éds.</multiple>
          </term>
        </terms>
      </locale>
      <macro name="container-contributors">
        <choose>
          <if type="chapter paper-conference" match="any">
            <text term="in" text-case="capitalize-first" suffix=" "/>
            <names variable="editor" delimiter=", " suffix=", ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=" (" text-case="capitalize-first" suffix=")"/>
              <substitute>
                <names variable="translator"/>
              </substitute>
            </names>
          </if>
        </choose>
      </macro>
      <macro name="secondary-contributors">
        <choose>
          <if type="chapter paper-conference" match="none">
            <names variable="translator" delimiter=", " prefix=" (" suffix=")">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", " text-case="capitalize-first"/>
              <substitute>
                <names variable="editor"/>
              </substitute>
            </names>
          </if>
        </choose>
      </macro>
      <macro name="author">
        <names variable="author">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="capitalize-first"/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <text macro="title"/>
          </substitute>
        </names>
      </macro>
      <macro name="author-short">
        <names variable="author">
          <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <choose>
              <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                <text variable="title" form="short" font-style="italic"/>
              </if>
              <else>
                <text variable="title" form="short" quotes="true"/>
              </else>
            </choose>
          </substitute>
        </names>
      </macro>
      <macro name="access">
        <choose>
          <if type="thesis">
            <choose>
              <if variable="archive" match="any">
                <group>
                  <text term="retrieved" text-case="capitalize-first" suffix=" "/>
                  <text term="from" suffix=" "/>
                  <text variable="archive" suffix="."/>
                  <text variable="archive_location" prefix=" (" suffix=")"/>
                </group>
              </if>
              <else>
                <group>
                  <text term="retrieved" text-case="capitalize-first" suffix=" "/>
                  <date variable="accessed" suffix=", ">
                    <date-part name="month" suffix=" "/>
                    <date-part name="day" suffix=", "/>
                    <date-part name="year"/>
                  </date>
                  <text term="from" suffix=" "/>
                  <text variable="URL"/>
                </group>
              </else>
            </choose>
          </if>
          <else>
            <choose>
              <if variable="URL">
                <choose>
                  <if variable="archive">
                    <group>
                      <text term="retrieved" text-case="capitalize-first" suffix=" "/>
                      <text term="from" suffix=" "/>
                      <text variable="archive" suffix="."/>
                    </group>
                  </if>
                  <else>
                    <group>
                      <text term="retrieved" text-case="capitalize-first" suffix=" "/>
                      <date variable="accessed" suffix=", ">
                        <date-part name="month" suffix=" "/>
                        <date-part name="day" suffix=", "/>
                        <date-part name="year"/>
                      </date>
                      <group>
                        <text term="from" suffix=" "/>
                        <text variable="URL"/>
                      </group>
                    </group>
                  </else>
                </choose>
              </if>
            </choose>
          </else>
        </choose>
      </macro>
      <macro name="title">
        <choose>
          <if type="report thesis" match="any">
            <text variable="title" font-style="italic"/>
            <group prefix=" (" suffix=")">
              <text variable="genre"/>
              <text variable="number" prefix=" No. "/>
            </group>
          </if>
          <else-if type="bill book graphic legal_case legislation manuscript motion_picture report song speech" match="any">
            <text variable="title" font-style="italic"/>
          </else-if>
          <else>
            <text variable="title"/>
          </else>
        </choose>
      </macro>
      <macro name="publisher">
        <choose>
          <if type="report" match="any">
            <group delimiter=": ">
              <text variable="publisher-place"/>
              <text variable="publisher"/>
            </group>
          </if>
          <else-if type="thesis" match="any">
            <group delimiter=", ">
              <text variable="publisher"/>
              <text variable="publisher-place"/>
            </group>
          </else-if>
          <else>
            <choose>
              <if variable="event event-title" match="none">
                <text variable="genre" suffix=", "/>
              </if>
            </choose>
            <group delimiter=": ">
              <text variable="publisher-place"/>
              <text variable="publisher"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="event">
        <choose>
          <if variable="event event-title" match="any">
            <choose>
              <if variable="genre" match="none">
                <text term="presented at" text-case="capitalize-first" suffix=" "/>
                <text macro="event-title"/>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <text term="presented at"/>
                  <text macro="event-title"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="event-title">
        <choose>
          <!-- TODO: We expect "event-title" to be used,
               but processors and applications may not be updated yet.
               This macro ensures that either "event" or "event-title" can be accpeted.
               Remove if procesor logic and application adoption can handle this. -->
          <if variable="event-title">
            <text variable="event-title"/>
          </if>
          <else>
            <text variable="event"/>
          </else>
        </choose>
      </macro>
      <macro name="issued">
        <choose>
          <if variable="issued">
            <group prefix=" (" suffix=").">
              <date variable="issued">
                <date-part name="year"/>
              </date>
              <choose>
                <if type="article-journal bill book chapter graphic legal_case legislation motion_picture paper-conference report song" match="none">
                  <date variable="issued">
                    <date-part prefix=", " name="month"/>
                    <date-part prefix=" " name="day"/>
                  </date>
                </if>
              </choose>
            </group>
          </if>
          <else>
            <text prefix=" (" term="no date" suffix=")." form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="issued-year">
        <choose>
          <if variable="issued">
            <date variable="issued">
              <date-part name="year"/>
            </date>
          </if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if is-numeric="edition">
            <group delimiter=" ">
              <number variable="edition" form="ordinal"/>
              <text term="edition" form="short"/>
            </group>
          </if>
          <else>
            <text variable="edition" suffix="."/>
          </else>
        </choose>
      </macro>
      <macro name="locators">
        <choose>
          <if type="article-journal article-magazine article-newspaper" match="any">
            <group prefix=", " delimiter=", ">
              <group>
                <text variable="volume" font-style="italic"/>
                <text variable="issue" prefix="(" suffix=")"/>
              </group>
              <text variable="page"/>
            </group>
          </if>
          <else-if type="bill book chapter graphic legal_case legislation motion_picture paper-conference report song" match="any">
            <group prefix=" (" suffix=")" delimiter=", ">
              <text macro="edition"/>
              <group>
                <text term="volume" form="short" plural="true" text-case="capitalize-first" suffix=" "/>
                <number variable="number-of-volumes" form="numeric" prefix="1-"/>
              </group>
              <group>
                <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                <number variable="volume" form="numeric"/>
              </group>
              <group>
                <label variable="page" form="short" suffix=" "/>
                <text variable="page"/>
              </group>
            </group>
          </else-if>
        </choose>
      </macro>
      <macro name="citation-locator">
        <group>
          <label variable="locator" form="short"/>
          <text variable="locator" prefix=" "/>
        </group>
      </macro>
      <citation et-al-min="6" et-al-use-first="1" et-al-subsequent-min="3" et-al-subsequent-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" givenname-disambiguation-rule="primary-name" collapse="year">
        <sort>
          <key macro="author"/>
          <key macro="issued-year"/>
        </sort>
        <layout prefix="(" suffix=")" delimiter="; ">
          <group delimiter=", ">
            <text macro="author-short"/>
            <text macro="issued-year"/>
            <text macro="citation-locator"/>
          </group>
        </layout>
      </citation>
      <bibliography hanging-indent="true" et-al-min="8" et-al-use-first="7" entry-spacing="0" line-spacing="2">
        <sort>
          <key macro="author"/>
          <key macro="issued-year" sort="ascending"/>
        </sort>
        <layout>
          <group suffix=".">
            <text macro="author" suffix="."/>
            <text macro="issued" suffix=" "/>
            <group delimiter=". ">
              <text macro="title"/>
              <group>
                <text macro="container-contributors"/>
                <text macro="secondary-contributors"/>
                <group delimiter=", ">
                  <text variable="container-title" font-style="italic"/>
                  <text variable="collection-title"/>
                </group>
              </group>
            </group>
            <text macro="locators"/>
            <group delimiter=", " prefix=". ">
              <text macro="event"/>
              <text macro="publisher"/>
            </group>
          </group>
          <text macro="access" prefix=". "/>
        </layout>
      </bibliography>
    </style>
    `,
  },
  {
    name: 'AMA (American Medical Association 11th edition)',
    key: `ama`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0"
        demote-non-dropping-particle="sort-only" page-range-format="expanded"
        initialize-with-hyphen="false" default-locale="en-US">
        <info>
            <title>American Medical Association 11th edition</title>
            <title-short>AMA (11th ed.)</title-short>
            <id>http://www.zotero.org/styles/american-medical-association</id>
            <link href="http://www.zotero.org/styles/american-medical-association" rel="self" />
            <link href="http://www.zotero.org/styles/american-medical-association-10th-edition"
                rel="template" />
            <link href="https://westlibrary.txwes.edu/sites/default/files/pdf/AMACitationStyle.pdf"
                rel="documentation" />
            <link
                href="https://www.amamanualofstyle.com/fileasset/AMAMOS/aaaAMWA%20presentation%20Nov%202019%20FULL.pdf"
                rel="documentation" />
            <author>
                <name>Julian Onions</name>
                <email>julian.onions@gmail.com</email>
            </author>
            <contributor>
                <name>Christian Pietsch</name>
                <uri>http://purl.org/net/pietsch</uri>
            </contributor>
            <contributor>
                <name>Daniel W Chan</name>
                <email>danwchan@protonmail.com</email>
            </contributor>
            <contributor>
                <name>Patrick O'Brien</name>
                <email>obrienpat86@gmail.com</email>
            </contributor>
            <category citation-format="numeric" />
            <category field="medicine" />
            <summary>The American Medical Association style as used in JAMA. Version 11 as per
                November-2019.</summary>
            <updated>2022-03-17T08:48:24+00:00</updated>
            <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under
                a Creative Commons Attribution-ShareAlike 3.0 License</rights>
        </info>
        <locale xml:lang="en">
            <terms>
                <term name="page-range-delimiter">-</term>
                <term name="presented at">presented at</term>
            </terms>
        </locale>
        <macro name="editor">
            <names variable="editor">
                <name name-as-sort-order="all" sort-separator=" " initialize-with="" delimiter=", "
                    delimiter-precedes-last="always" />
                <label form="short" prefix=", " />
            </names>
        </macro>
        <macro name="author">
            <group suffix=".">
                <names variable="author">
                    <name name-as-sort-order="all" sort-separator=" " initialize-with="" delimiter=", "
                        delimiter-precedes-last="always" />
                    <label form="short" prefix=", " />
                    <substitute>
                        <names variable="editor" />
                        <text macro="title" />
                    </substitute>
                </names>
            </group>
        </macro>
        <macro name="access">
            <choose>
                <if type="article-newspaper" match="none">
                    <choose>
                        <if variable="DOI">
                            <text value="doi:" />
                            <text variable="DOI" />
                        </if>
                        <else-if variable="URL">
                            <group delimiter=". ">
                                <choose>
                                    <if type="webpage post post-weblog" match="any">
                                        <date variable="issued" prefix="Published " form="text" />
                                    </if>
                                </choose>
                                <group>
                                    <text term="accessed" text-case="capitalize-first" suffix=" " />
                                    <date variable="accessed">
                                        <date-part name="month" suffix=" " />
                                        <date-part name="day" suffix=", " />
                                        <date-part name="year" />
                                    </date>
                                </group>
                                <text variable="URL" />
                            </group>
                        </else-if>
                    </choose>
                </if>
            </choose>
        </macro>
        <macro name="title">
            <choose>
                <if type="bill book graphic legal_case legislation motion_picture report song thesis"
                    match="any">
                    <text variable="title" font-style="italic" text-case="title" />
                </if>
                <else>
                    <text variable="title" />
                </else>
            </choose>
        </macro>
        <macro name="publisher">
            <text variable="publisher" />
        </macro>
        <macro name="edition">
            <choose>
                <if is-numeric="edition">
                    <group delimiter=" ">
                        <number variable="edition" form="ordinal" />
                        <text term="edition" form="short" />
                    </group>
                </if>
                <else>
                    <text variable="edition" suffix="." />
                </else>
            </choose>
        </macro>
        <citation collapse="citation-number">
            <sort>
                <key variable="citation-number" />
            </sort>
            <layout delimiter="," vertical-align="sup">
                <text variable="citation-number" />
                <group prefix="(" suffix=")">
                    <label variable="locator" form="short" strip-periods="true" />
                    <text variable="locator" />
                </group>
            </layout>
        </citation>
        <bibliography hanging-indent="false" et-al-min="7" et-al-use-first="3"
            second-field-align="flush">
            <layout>
                <text variable="citation-number" suffix="." />
                <text macro="author"/>
                <text macro="title" prefix=" " suffix="." />
                <choose>
                    <if type="bill book graphic legislation motion_picture report song" match="any">
                        <group suffix="." prefix=" " delimiter=" ">
                            <group delimiter=" ">
                                <text term="volume" form="short" text-case="capitalize-first"
                                    strip-periods="true" />
                                <text variable="volume" suffix="." />
                            </group>
                            <text macro="edition" />
                            <text macro="editor" prefix="(" suffix=")" />
                        </group>
                        <text macro="publisher" prefix=" " />
                        <group suffix="." prefix="; ">
                            <date variable="issued">
                                <date-part name="year" />
                            </date>
                            <text variable="page" prefix=":" />
                        </group>
                    </if>
                    <else-if type="chapter paper-conference entry-dictionary entry-encyclopedia"
                        match="any">
                        <group prefix=" " delimiter=" ">
                            <text term="in" text-case="capitalize-first" suffix=":" />
                            <text macro="editor" />
                            <text variable="container-title" font-style="italic" suffix="."
                                text-case="title" />
                            <group delimiter=" ">
                                <text term="volume" form="short" text-case="capitalize-first"
                                    strip-periods="true" />
                                <text variable="volume" suffix="." />
                            </group>
                            <text macro="edition" />
                            <text variable="collection-title" suffix="." />
                            <group suffix=".">
                                <text macro="publisher" />
                                <group suffix="." prefix="; ">
                                    <date variable="issued">
                                        <date-part name="year" />
                                    </date>
                                    <text variable="page" prefix=":" />
                                </group>
                            </group>
                        </group>
                    </else-if>
                    <else-if type="article-newspaper">
                        <text variable="container-title" font-style="italic" prefix=" " suffix=". " />
                        <choose>
                            <if variable="URL">
                                <group delimiter=". " suffix=".">
                                    <text variable="URL" />
                                    <group prefix="Published ">
                                        <date variable="issued">
                                            <date-part name="month" suffix=" " />
                                            <date-part name="day" suffix=", " />
                                            <date-part name="year" />
                                        </date>
                                    </group>
                                    <group>
                                        <text term="accessed" text-case="capitalize-first" suffix=" " />
                                        <date variable="accessed">
                                            <date-part name="month" suffix=" " />
                                            <date-part name="day" suffix=", " />
                                            <date-part name="year" />
                                        </date>
                                    </group>
                                </group>
                            </if>
                            <else>
                                <group delimiter=":" suffix=".">
                                    <group>
                                        <date variable="issued">
                                            <date-part name="month" suffix=" " />
                                            <date-part name="day" suffix=", " />
                                            <date-part name="year" />
                                        </date>
                                    </group>
                                    <text variable="page" />
                                </group>
                            </else>
                        </choose>
                    </else-if>
                    <else-if type="legal_case">
                        <group suffix="," prefix=" " delimiter=" ">
                            <text macro="editor" prefix="(" suffix=")" />
                        </group>
                        <group prefix=" " delimiter=" ">
                            <text variable="container-title" />
                            <text variable="volume" />
                        </group>
                        <text variable="page" prefix=", " suffix=" " />
                        <group prefix="(" suffix=")." delimiter=" ">
                            <text variable="authority" />
                            <date variable="issued">
                                <date-part name="year" />
                            </date>
                        </group>
                    </else-if>
                    <else-if type="webpage post post-weblog" match="any">
                        <text variable="container-title" prefix=" " suffix="." />
                    </else-if>
                    <else-if type="speech">
                        <group prefix=" " suffix=":">
                            <choose>
                                <if variable="genre">
                                    <text variable="genre" suffix=" " />
                                    <text term="presented at" />
                                </if>
                                <else>
                                    <text term="presented at" text-case="capitalize-first" />
                                </else>
                            </choose>
                        </group>
                        <group delimiter="; " prefix=" " suffix=".">
                            <text variable="event" />
                            <group>
                                <date delimiter=" " variable="issued">
                                    <date-part name="month" />
                                    <date-part name="day" suffix="," />
                                    <date-part name="year" />
                                </date>
                            </group>
                            <text variable="event-place" />
                        </group>
                    </else-if>
                    <else-if type="thesis" match="any">
                        <group delimiter=". " prefix=" " suffix=".">
                            <text variable="genre" />
                            <group delimiter="; ">
                                <text variable="publisher" />
                                <date date-parts="year" form="text" variable="issued" />
                            </group>
                        </group>
                    </else-if>
                    <else>
                        <text macro="editor" prefix=" " suffix="." />
                        <group prefix=" " suffix=".">
                            <text variable="container-title" font-style="italic" form="short"
                                strip-periods="true" suffix="." />
                            <group delimiter=";" prefix=" ">
                                <choose>
                                    <if variable="issue volume" match="any">
                                        <date variable="issued">
                                            <date-part name="year" />
                                        </date>
                                    </if>
                                    <else>
                                        <group delimiter=" ">
                                            <text value="Published online" />
                                            <date form="text" date-parts="year-month-day"
                                                variable="issued" />
                                        </group>
                                    </else>
                                </choose>
                                <group>
                                    <text variable="volume" />
                                    <text variable="issue" prefix="(" suffix=")" />
                                </group>
                            </group>
                            <text variable="page" prefix=":" />
                        </group>
                    </else>
                </choose>
                <text prefix=" " macro="access" />
            </layout>
        </bibliography>
    </style>`,
  },
  {
    name: 'Chicago Manual of Style 16th edition (note)',
    key: `chicago-shortnote-bibliography-16th-edition`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="display-and-sort" page-range-format="chicago">
      <info>
        <title>Chicago Manual of Style 16th edition (author-date)</title>
        <id>http://www.zotero.org/styles/chicago-author-date-16th-edition</id>
        <link href="http://www.zotero.org/styles/chicago-author-date-16th-edition" rel="self"/>
        <link href="http://www.chicagomanualofstyle.org/tools_citationguide.html" rel="documentation"/>
        <author>
          <name>Julian Onions</name>
          <email>julian.onions@gmail.com</email>
        </author>
        <contributor>
          <name>Sebastian Karcher</name>
        </contributor>
        <contributor>
          <name>Richard Karnesky</name>
          <email>karnesky+zotero@gmail.com</email>
          <uri>http://arc.nucapt.northwestern.edu/Richard_Karnesky</uri>
        </contributor>
        <contributor>
          <name>Andrew Dunning</name>
          <uri>https://orcid.org/0000-0003-0464-5036</uri>
        </contributor>
        <contributor>
          <name>Brenton M. Wiernik</name>
        </contributor>
        <category citation-format="author-date"/>
        <category field="generic-base"/>
        <summary>The author-date variant of the Chicago style</summary>
        <updated>2017-10-12T12:00:00+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="en">
        <terms>
          <term name="editor" form="verb-short">ed.</term>
          <term name="container-author" form="verb">by</term>
          <term name="translator" form="verb-short">trans.</term>
          <term name="editortranslator" form="verb">edited and translated by</term>
          <term name="translator" form="short">trans.</term>
        </terms>
      </locale>
      <macro name="secondary-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="none">
            <group delimiter=". ">
              <names variable="editor translator" delimiter=". ">
                <label form="verb" text-case="capitalize-first" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
              <names variable="director" delimiter=". ">
                <label form="verb" text-case="capitalize-first" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="container-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <group prefix=", " delimiter=", ">
              <names variable="container-author" delimiter=", ">
                <label form="verb" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
              <names variable="editor translator" delimiter=", ">
                <label form="verb" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="editor">
        <names variable="editor">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="translator">
        <names variable="translator">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="recipient">
        <choose>
          <if type="personal_communication">
            <choose>
              <if variable="genre">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
              <else>
                <text term="letter" text-case="capitalize-first"/>
              </else>
            </choose>
          </if>
        </choose>
        <names variable="recipient" delimiter=", ">
          <label form="verb" prefix=" " text-case="lowercase" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="substitute-title">
        <choose>
          <if type="article-magazine article-newspaper review review-book" match="any">
            <text macro="container-title"/>
          </if>
        </choose>
      </macro>
      <macro name="contributors">
        <group delimiter=". ">
          <names variable="author">
            <name and="text" name-as-sort-order="first" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=", "/>
            <substitute>
              <names variable="editor"/>
              <names variable="translator"/>
              <names variable="director"/>
              <text macro="substitute-title"/>
              <text macro="title"/>
            </substitute>
          </names>
          <text macro="recipient"/>
        </group>
      </macro>
      <macro name="contributors-short">
        <names variable="author">
          <name form="short" and="text" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <names variable="director"/>
            <text macro="substitute-title"/>
            <text macro="title"/>
          </substitute>
        </names>
      </macro>
      <macro name="interviewer">
        <names variable="interviewer" delimiter=", ">
          <label form="verb" prefix=" " text-case="capitalize-first" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="archive">
        <group delimiter=". ">
          <text variable="archive_location" text-case="capitalize-first"/>
          <text variable="archive"/>
          <text variable="archive-place"/>
        </group>
      </macro>
      <macro name="access">
        <group delimiter=". ">
          <choose>
            <if type="graphic report" match="any">
              <text macro="archive"/>
            </if>
            <else-if type="article-journal bill book chapter legal_case legislation motion_picture paper-conference" match="none">
              <text macro="archive"/>
            </else-if>
          </choose>
          <choose>
            <if type="webpage post-weblog" match="any">
              <date variable="issued" delimiter=" ">
                <date-part name="month"/>
                <date-part name="day"/>
              </date>
            </if>
          </choose>
          <choose>
            <if variable="issued" match="none">
              <group delimiter=" ">
                <text term="accessed" text-case="capitalize-first"/>
                <date variable="accessed" delimiter=" ">
                  <date-part name="month"/>
                  <date-part name="day"/>
                </date>
              </group>
            </if>
          </choose>
          <choose>
            <if type="legal_case" match="none">
              <choose>
                <if variable="DOI">
                  <text variable="DOI" prefix="doi:"/>
                </if>
                <else>
                  <text variable="URL"/>
                </else>
              </choose>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="title">
        <choose>
          <if variable="title" match="none">
            <choose>
              <if type="personal_communication" match="none">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
            </choose>
          </if>
          <else-if type="bill book graphic legislation motion_picture song" match="any">
            <text variable="title" text-case="title" font-style="italic"/>
            <group prefix=" (" suffix=")" delimiter=" ">
              <text term="version"/>
              <text variable="version"/>
            </group>
          </else-if>
          <else-if variable="reviewed-author">
            <choose>
              <if variable="reviewed-title">
                <group delimiter=". ">
                  <text variable="title" text-case="title" quotes="true"/>
                  <group delimiter=", ">
                    <text variable="reviewed-title" text-case="title" font-style="italic" prefix="Review of "/>
                    <names variable="reviewed-author">
                      <label form="verb-short" text-case="lowercase" suffix=" "/>
                      <name and="text" delimiter=", "/>
                    </names>
                  </group>
                </group>
              </if>
              <else>
                <group delimiter=", ">
                  <text variable="title" text-case="title" font-style="italic" prefix="Review of "/>
                  <names variable="reviewed-author">
                    <label form="verb-short" text-case="lowercase" suffix=" "/>
                    <name and="text" delimiter=", "/>
                  </names>
                </group>
              </else>
            </choose>
          </else-if>
          <else-if type="legal_case interview patent" match="any">
            <text variable="title"/>
          </else-if>
          <else>
            <text variable="title" text-case="title" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" " prefix=". ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short" strip-periods="true"/>
                </group>
              </if>
              <else>
                <text variable="edition" text-case="capitalize-first" prefix=". "/>
              </else>
            </choose>
          </if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" " prefix=", ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short"/>
                </group>
              </if>
              <else>
                <text variable="edition" prefix=", "/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators">
        <choose>
          <if type="article-journal">
            <choose>
              <if variable="volume">
                <text variable="volume" prefix=" "/>
                <group prefix=" (" suffix=")">
                  <choose>
                    <if variable="issue">
                      <text variable="issue"/>
                    </if>
                    <else>
                      <date variable="issued">
                        <date-part name="month"/>
                      </date>
                    </else>
                  </choose>
                </group>
              </if>
              <else-if variable="issue">
                <group delimiter=" " prefix=", ">
                  <text term="issue" form="short"/>
                  <text variable="issue"/>
                  <date variable="issued" prefix="(" suffix=")">
                    <date-part name="month"/>
                  </date>
                </group>
              </else-if>
              <else>
                <date variable="issued" prefix=", ">
                  <date-part name="month"/>
                </date>
              </else>
            </choose>
          </if>
          <else-if type="legal_case">
            <text variable="volume" prefix=", "/>
            <text variable="container-title" prefix=" "/>
            <text variable="page" prefix=" "/>
          </else-if>
          <else-if type="bill book graphic legal_case legislation motion_picture report song" match="any">
            <group prefix=". " delimiter=". ">
              <group>
                <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                <number variable="volume" form="numeric"/>
              </group>
              <group>
                <number variable="number-of-volumes" form="numeric"/>
                <text term="volume" form="short" prefix=" " plural="true"/>
              </group>
            </group>
          </else-if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="page" match="none">
                <group prefix=". ">
                  <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                  <number variable="volume" form="numeric"/>
                </group>
              </if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-chapter">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="page">
                <group prefix=", ">
                  <text variable="volume" suffix=":"/>
                  <text variable="page"/>
                </group>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-article">
        <choose>
          <if type="article-newspaper">
            <group prefix=", " delimiter=", ">
              <group delimiter=" ">
                <text variable="edition"/>
                <text term="edition"/>
              </group>
              <group>
                <text term="section" form="short" suffix=" "/>
                <text variable="section"/>
              </group>
            </group>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume issue" match="any">
                <text variable="page" prefix=": "/>
              </if>
              <else>
                <text variable="page" prefix=", "/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="point-locators">
        <choose>
          <if variable="locator">
            <choose>
              <if locator="page" match="none">
                <choose>
                  <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                    <choose>
                      <if variable="volume">
                        <group>
                          <text term="volume" form="short" suffix=" "/>
                          <number variable="volume" form="numeric"/>
                          <label variable="locator" form="short" prefix=", " suffix=" "/>
                        </group>
                      </if>
                      <else>
                        <label variable="locator" form="short" suffix=" "/>
                      </else>
                    </choose>
                  </if>
                  <else>
                    <label variable="locator" form="short" suffix=" "/>
                  </else>
                </choose>
              </if>
              <else-if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                <number variable="volume" form="numeric" suffix=":"/>
              </else-if>
            </choose>
            <text variable="locator"/>
          </if>
        </choose>
      </macro>
      <macro name="container-prefix">
        <text term="in" text-case="capitalize-first"/>
      </macro>
      <macro name="container-title">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <text macro="container-prefix" suffix=" "/>
          </if>
        </choose>
        <choose>
          <if type="legal_case" match="none">
            <text variable="container-title" text-case="title" font-style="italic"/>
          </if>
        </choose>
      </macro>
      <macro name="publisher">
        <group delimiter=": ">
          <text variable="publisher-place"/>
          <text variable="publisher"/>
        </group>
      </macro>
      <macro name="date">
        <choose>
          <if variable="issued">
            <group delimiter=" ">
              <date variable="original-date" form="text" date-parts="year" prefix="(" suffix=")"/>
              <date variable="issued">
                <date-part name="year"/>
              </date>
            </group>
          </if>
          <else-if variable="accessed">
            <date variable="accessed">
              <date-part name="year"/>
            </date>
          </else-if>
          <else-if variable="status">
            <text variable="status" text-case="capitalize-first"/>
          </else-if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="date-in-text">
        <choose>
          <if variable="issued">
            <group delimiter=" ">
              <date variable="original-date" form="text" date-parts="year" prefix="[" suffix="]"/>
              <date variable="issued">
                <date-part name="year"/>
              </date>
            </group>
          </if>
          <else-if variable="accessed">
            <date variable="accessed">
              <date-part name="year"/>
            </date>
          </else-if>
          <else-if variable="status">
            <text variable="status"/>
          </else-if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="day-month">
        <date variable="issued">
          <date-part name="month"/>
          <date-part name="day" prefix=" "/>
        </date>
      </macro>
      <macro name="collection-title">
        <choose>
          <if match="none" type="article-journal">
            <choose>
              <if match="none" is-numeric="collection-number">
                <group delimiter=", ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="collection-title-journal">
        <choose>
          <if type="article-journal">
            <group delimiter=" ">
              <text variable="collection-title"/>
              <text variable="collection-number"/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="event">
        <group delimiter=" ">
          <choose>
            <if variable="genre">
              <text term="presented at"/>
            </if>
            <else>
              <text term="presented at" text-case="capitalize-first"/>
            </else>
          </choose>
          <text variable="event"/>
        </group>
      </macro>
      <macro name="description">
        <choose>
          <if type="interview">
            <group delimiter=". ">
              <text macro="interviewer"/>
              <text variable="medium" text-case="capitalize-first"/>
            </group>
          </if>
          <else-if type="patent">
            <group delimiter=" " prefix=". ">
              <text variable="authority"/>
              <text variable="number"/>
            </group>
          </else-if>
          <else>
            <text variable="medium" text-case="capitalize-first" prefix=". "/>
          </else>
        </choose>
        <choose>
          <if variable="title" match="none"/>
          <else-if type="thesis personal_communication speech" match="any"/>
          <else>
            <group delimiter=" " prefix=". ">
              <text variable="genre" text-case="capitalize-first"/>
              <choose>
                <if type="report">
                  <text variable="number"/>
                </if>
              </choose>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="issue">
        <choose>
          <if type="legal_case">
            <text variable="authority" prefix=". "/>
          </if>
          <else-if type="speech">
            <group prefix=". " delimiter=", ">
              <group delimiter=" ">
                <text variable="genre" text-case="capitalize-first"/>
                <text macro="event"/>
              </group>
              <text variable="event-place"/>
              <text macro="day-month"/>
            </group>
          </else-if>
          <else-if type="article-newspaper article-magazine personal_communication" match="any">
            <text macro="day-month" prefix=", "/>
          </else-if>
          <else-if type="patent">
            <group delimiter=", " prefix=", ">
              <group delimiter=" ">
                <!--Needs Localization-->
                <text value="filed"/>
                <date variable="submitted" form="text"/>
              </group>
              <group delimiter=" ">
                <choose>
                  <if variable="issued submitted" match="all">
                    <text term="and"/>
                  </if>
                </choose>
                <!--Needs Localization-->
                <text value="issued"/>
                <date variable="issued" form="text"/>
              </group>
            </group>
          </else-if>
          <else>
            <group prefix=". " delimiter=", ">
              <choose>
                <if type="thesis">
                  <text variable="genre" text-case="capitalize-first"/>
                </if>
              </choose>
              <text macro="publisher"/>
            </group>
          </else>
        </choose>
      </macro>
      <citation et-al-min="4" et-al-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" givenname-disambiguation-rule="primary-name" collapse="year">
        <layout prefix="(" suffix=")" delimiter="; ">
          <group delimiter=", ">
            <choose>
              <if variable="issued accessed" match="any">
                <group delimiter=" ">
                  <text macro="contributors-short"/>
                  <text macro="date-in-text"/>
                </group>
              </if>
              <!---comma before forthcoming and n.d.-->
              <else>
                <group delimiter=", ">
                  <text macro="contributors-short"/>
                  <text macro="date-in-text"/>
                </group>
              </else>
            </choose>
            <text macro="point-locators"/>
          </group>
        </layout>
      </citation>
      <bibliography hanging-indent="true" et-al-min="11" et-al-use-first="7" subsequent-author-substitute="&#8212;&#8212;&#8212;" entry-spacing="0">
        <sort>
          <key macro="contributors"/>
          <key variable="issued"/>
          <key variable="title"/>
        </sort>
        <layout suffix=".">
          <group delimiter=". ">
            <text macro="contributors"/>
            <text macro="date"/>
            <text macro="title"/>
          </group>
          <text macro="description"/>
          <text macro="secondary-contributors" prefix=". "/>
          <text macro="container-title" prefix=". "/>
          <text macro="container-contributors"/>
          <text macro="edition"/>
          <text macro="locators-chapter"/>
          <text macro="collection-title-journal" prefix=", " suffix=", "/>
          <text macro="locators"/>
          <text macro="collection-title" prefix=". "/>
          <text macro="issue"/>
          <text macro="locators-article"/>
          <text macro="access" prefix=". "/>
        </layout>
      </bibliography>
    </style>`
  },
  {
    name: 'OSCOLA (Oxford University Standard for Citation of Legal Authorities)',
    key: `oscola`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="note" version="1.0" demote-non-dropping-particle="never" default-locale="en-GB">
      <info>
        <title>OSCOLA (Oxford University Standard for Citation of Legal Authorities)</title>
        <title-short>OSCOLA</title-short>
        <id>http://www.zotero.org/styles/oscola</id>
        <link href="http://www.zotero.org/styles/oscola" rel="self"/>
        <link href="http://www.zotero.org/styles/australian-guide-to-legal-citation" rel="template"/>
        <link href="http://www.law.ox.ac.uk/publications/oscola.php" rel="documentation"/>
        <author>
          <name>Sebastian Karcher</name>
        </author>
        <category citation-format="note"/>
        <category field="law"/>
        <summary>The OSCOLA Standards. For a Zotero Group showing data-entry in Zotero see: https://www.zotero.org/groups/oscola_samples/items/order/itemType</summary>
        <updated>2013-11-15T01:14:57+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale>
        <terms>
          <term name="chapter" form="short">
            <single>ch.</single>
            <multiple>chs.</multiple>
          </term>
          <term name="section" form="short">
            <single>s</single>
            <multiple>ss</multiple>
          </term>
          <term name="paragraph" form="short">
            <single>para</single>
            <multiple>paras</multiple>
          </term>
          <term name="translator" form="short">
            <single>tr.</single>
            <multiple>trs.</multiple>
          </term>
          <term name="edition" form="short">edn.</term>
          <term name="et-al">and others</term>
        </terms>
      </locale>
      <!--Authors and Persons-->
      <macro name="author-note">
        <!--for bills & hearing this should start with jurisdiction once available-->
        <choose>
          <if type="interview">
            <group delimiter=", ">
              <names variable="interviewer">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              </names>
              <names variable="author" prefix="Interview with ">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              </names>
            </group>
          </if>
          <else-if type="personal_communication">
            <group delimiter=" ">
              <group delimiter=" from ">
                <text variable="genre"/>
                <names variable="author">
                  <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
                </names>
              </group>
              <names variable="recipient" prefix="to ">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              </names>
            </group>
          </else-if>
          <else-if type="broadcast">
            <text variable="publisher"/>
          </else-if>
          <else-if type="legal_case legislation" match="any"/>
          <else>
            <names variable="author">
              <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              <label form="short" prefix=" (" suffix=")" strip-periods="true"/>
              <substitute>
                <names variable="editor"/>
                <names variable="translator"/>
                <text macro="title"/>
              </substitute>
            </names>
          </else>
        </choose>
      </macro>
      <macro name="author-short">
        <choose>
          <if type="interview">
            <group delimiter=", ">
              <names variable="interviewer">
                <name delimiter-precedes-last="never" and="text" form="short" delimiter=", " initialize="false" initialize-with=""/>
              </names>
              <names variable="author" prefix="Interview with ">
                <name delimiter-precedes-last="never" and="text" form="short" delimiter=", " initialize="false" initialize-with=""/>
              </names>
            </group>
          </if>
          <else-if type="personal_communication">
            <group delimiter=" ">
              <group delimiter=" from ">
                <text variable="genre"/>
                <names variable="author">
                  <name delimiter-precedes-last="never" and="text" delimiter=", " form="short" initialize="false" initialize-with=""/>
                </names>
              </group>
              <names variable="recipient" prefix="to ">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" form="short" initialize-with=""/>
              </names>
            </group>
          </else-if>
          <else-if type="broadcast">
            <text variable="publisher"/>
          </else-if>
          <else>
            <names variable="author">
              <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with="" form="short"/>
              <substitute>
                <names variable="editor"/>
                <names variable="translator"/>
                <text macro="title"/>
              </substitute>
            </names>
          </else>
        </choose>
      </macro>
      <macro name="author">
        <!--for bills & hearing this should start with jurisdiction once available-->
        <choose>
          <if type="interview">
            <group delimiter=", ">
              <names variable="interviewer">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize-with="" name-as-sort-order="all" sort-separator=" "/>
              </names>
              <names variable="author" prefix="Interview with ">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              </names>
            </group>
          </if>
          <else-if type="personal_communication">
            <group delimiter=" ">
              <group delimiter=", ">
                <names variable="author">
                  <name delimiter-precedes-last="never" and="text" delimiter=", " initialize-with="" name-as-sort-order="all" sort-separator=" "/>
                </names>
                <text variable="genre"/>
              </group>
              <names variable="recipient" prefix="to ">
                <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              </names>
            </group>
          </else-if>
          <else-if type="broadcast">
            <text variable="publisher"/>
          </else-if>
          <else-if type="legal_case legislation" match="any"/>
          <else>
            <names variable="author">
              <name delimiter-precedes-last="never" and="text" delimiter=", " name-as-sort-order="all" initialize-with="" sort-separator=" "/>
              <label form="short" prefix=" (" suffix=")" strip-periods="true"/>
              <substitute>
                <names variable="editor"/>
                <names variable="translator"/>
                <text macro="title"/>
              </substitute>
            </names>
          </else>
        </choose>
      </macro>
      <macro name="editor">
        <choose>
          <if type="chapter paper-conference entry-encyclopedia" match="none">
            <names variable="editor translator container-author" delimiter=", ">
              <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
              <label form="short" prefix=" " strip-periods="true"/>
            </names>
          </if>
        </choose>
      </macro>
      <macro name="editor-chapter">
        <group>
          <text term="in" suffix=" "/>
          <names variable="editor translator container-author" delimiter=", ">
            <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
            <label form="short" prefix=" (" suffix=")" strip-periods="true"/>
          </names>
        </group>
      </macro>
      <!-- Titles -->
      <macro name="title">
        <choose>
          <if type="book motion_picture treaty" match="any">
            <text variable="title" font-style="italic" text-case="title"/>
          </if>
          <else-if type="bill legislation" match="any">
            <text variable="title"/>
          </else-if>
          <else-if type="legal_case">
            <text variable="title" font-style="italic" strip-periods="true"/>
          </else-if>
          <else>
            <text variable="title" quotes="true" text-case="title"/>
          </else>
        </choose>
      </macro>
      <macro name="title-short">
        <choose>
          <if type="book motion_picture treaty" match="any">
            <text variable="title" font-style="italic" text-case="title" form="short"/>
          </if>
          <else-if type="bill legislation" match="any">
            <text variable="title" form="short"/>
          </else-if>
          <else-if type="legal_case">
            <choose>
              <if variable="title-short">
                <text variable="title-short" font-style="italic"/>
              </if>
              <else>
                <text variable="title" font-style="italic"/>
              </else>
            </choose>
          </else-if>
          <else>
            <text variable="title" quotes="true" text-case="title" form="short"/>
          </else>
        </choose>
      </macro>
      <!--Dates-->
      <macro name="issued-year">
        <date variable="issued" form="text" date-parts="year"/>
      </macro>
      <macro name="issued-full">
        <date variable="issued" form="text"/>
      </macro>
      <macro name="date-parenthesis">
        <choose>
          <if type="legal_case article-journal article-magazine" match="any">
            <choose>
              <if variable="number authority" match="all">
                <text macro="issued-year" prefix="[" suffix="]"/>
              </if>
              <else-if variable="volume">
                <text macro="issued-year" prefix="(" suffix=")"/>
              </else-if>
              <else-if variable="container-title volume number" match="any">
                <!--no year in square brackets for unreported case w/o medium neutral citation-->
                <text macro="issued-year" prefix="[" suffix="]"/>
              </else-if>
            </choose>
          </if>
          <else-if type="legislation bill" match="any">
            <text macro="issued-year"/>
          </else-if>
        </choose>
      </macro>
      <!--publication info -->
      <macro name="publisher">
        <choose>
          <if type="book chapter broadcast personal_communication manuscript paper-conference article-newspaper report legislation motion_picture speech interview thesis entry-encyclopedia webpage post-weblog article" match="any">
            <group delimiter=" ">
              <group prefix="(" suffix=")" delimiter=", ">
                <choose>
                  <if type="article-newspaper">
                    <text variable="publisher-place" strip-periods="true"/>
                    <date variable="issued" form="text"/>
                  </if>
                  <else-if type="broadcast personal_communication treaty" match="any">
                    <date variable="issued" form="text"/>
                  </else-if>
                  <else-if type="legislation bill" match="any">
                    <!--this should be jurisdiction we use code instead-->
                    <text variable="container-title" strip-periods="true"/>
                  </else-if>
                  <else>
                    <!--this won't work in Zotero yet, but does no harm -->
                    <names variable="director">
                      <label form="verb" text-case="capitalize-first" suffix=" "/>
                      <name delimiter-precedes-last="never" and="text" delimiter=", " initialize="false" initialize-with=""/>
                    </names>
                    <text macro="editor"/>
                    <choose>
                      <!--if none of these, this we don't want edition either. Might be Loose-Leaf-->
                      <if variable="publisher issued genre container-title" match="any">
                        <text macro="edition"/>
                      </if>
                    </choose>
                    <choose>
                      <if type="speech">
                        <text variable="event"/>
                        <text variable="event-place"/>
                        <text macro="issued-full"/>
                      </if>
                      <else-if type="thesis" match="any">
                        <text variable="genre" strip-periods="true"/>
                        <group delimiter=" ">
                          <text variable="publisher" strip-periods="true"/>
                          <text macro="issued-year"/>
                        </group>
                      </else-if>
                      <else-if type="webpage post-weblog" match="any">
                        <text variable="container-title" font-style="italic"/>
                        <text macro="issued-full"/>
                      </else-if>
                      <else-if type="interview" match="any">
                        <text macro="issued-full"/>
                      </else-if>
                      <else-if type="article" match="any">
                        <text variable="publisher" strip-periods="true"/>
                        <text macro="issued-full"/>
                      </else-if>
                      <else>
                        <group delimiter=" ">
                          <text variable="publisher" strip-periods="true"/>
                          <text macro="issued-year"/>
                        </group>
                      </else>
                    </choose>
                  </else>
                </choose>
              </group>
              <choose>
                <if type="report interview manuscript" match="any">
                  <group delimiter=" ">
                    <text variable="genre" strip-periods="true"/>
                    <text variable="number"/>
                  </group>
                </if>
              </choose>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="looseleaf-note">
        <choose>
          <if type="book">
            <choose>
              <if variable="publisher issued" match="none">
                <choose>
                  <if variable="locator">
                    <group delimiter=" ">
                      <label variable="locator" form="short" strip-periods="true"/>
                      <text variable="locator"/>
                      <text variable="edition" prefix="(" suffix=")"/>
                    </group>
                  </if>
                </choose>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="volume-book">
        <choose>
          <if type="book chapter report" match="any">
            <group delimiter=" ">
              <label variable="volume" form="short" strip-periods="true"/>
              <text variable="volume"/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if is-numeric="edition">
            <group delimiter=" ">
              <number variable="edition" form="ordinal"/>
              <label variable="edition" form="short" strip-periods="true"/>
            </group>
          </if>
          <else>
            <text variable="edition" strip-periods="true"/>
          </else>
        </choose>
      </macro>
      <macro name="book-container">
        <choose>
          <if type="chapter paper-conference entry-encyclopedia" match="any">
            <group>
              <text macro="editor-chapter" prefix=" "/>
              <text variable="container-title" font-style="italic" prefix=", "/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="broadcast-container">
        <choose>
          <if type="broadcast" match="any">
            <text variable="container-title" font-style="italic"/>
          </if>
        </choose>
      </macro>
      <macro name="bill-number">
        <choose>
          <if type="bill">
            <text variable="number" prefix="[" suffix="]"/>
          </if>
        </choose>
      </macro>
      <macro name="article-case-info">
        <choose>
          <if type="article-journal article-magazine article-newspaper legal_case" match="any">
            <group delimiter=", ">
              <!--Assume that only cases with a Medium Neutral Citation have a docket number -->
              <choose>
                <if variable="authority number" match="all">
                  <group delimiter=" ">
                    <text variable="authority" form="short" strip-periods="true"/>
                    <text variable="number"/>
                  </group>
                </if>
              </choose>
              <group delimiter=" ">
                <text variable="volume"/>
                <choose>
                  <if type="legal_case">
                    <choose>
                      <if variable="container-title">
                        <text variable="container-title" form="short" strip-periods="true"/>
                      </if>
                    </choose>
                  </if>
                  <else-if type="article-magazine article-newspaper" match="any">
                    <text variable="container-title" font-style="italic"/>
                  </else-if>
                  <else>
                    <text variable="container-title"/>
                  </else>
                </choose>
              </group>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="page-first">
        <choose>
          <if type="chapter report paper-conference" match="none">
            <text variable="page-first"/>
          </if>
        </choose>
      </macro>
      <macro name="court">
        <choose>
          <if type="legal_case">
            <choose>
              <if variable="number" match="none">
                <text variable="authority" prefix="(" suffix=")" strip-periods="true"/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locator-basic">
        <group delimiter=" ">
          <choose>
            <if locator="page" match="none">
              <label variable="locator" form="short" strip-periods="true"/>
            </if>
          </choose>
          <text variable="locator"/>
        </group>
      </macro>
      <macro name="locator-space">
        <choose>
          <if type="legal_case">
            <choose>
              <if locator="paragraph">
                <text variable="locator" prefix="[" suffix="]"/>
              </if>
              <else-if variable="number container-title volume page" match="all"/>
              <else-if variable="authority">
                <text variable="locator"/>
              </else-if>
            </choose>
          </if>
          <else-if type="legislation book article-journal article-magazine" match="none">
            <text macro="locator-basic"/>
          </else-if>
          <else-if type="book">
            <choose>
              <if variable="issued publisher" match="any">
                <text macro="locator-basic"/>
              </if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locator-comma">
        <choose>
          <if type="legal_case">
            <choose>
              <if locator="paragraph" match="none">
                <choose>
                  <if variable="authority" match="none">
                    <text variable="locator"/>
                  </if>
                  <else-if variable="number container-title volume page" match="all">
                    <text variable="locator"/>
                  </else-if>
                </choose>
              </if>
            </choose>
          </if>
          <else-if type="legislation article-journal article-magazine" match="any">
            <text macro="locator-basic"/>
          </else-if>
        </choose>
      </macro>
      <!--Others -->
      <macro name="treaty-catchall">
        <choose>
          <if type="treaty">
            <text variable="genre"/>
          </if>
        </choose>
      </macro>
      <macro name="URL">
        <choose>
          <if type="legal_case legislation bill" match="none">
            <choose>
              <if variable="URL">
                <group delimiter=" ">
                  <text variable="URL" prefix="&lt;" suffix="&gt;"/>
                  <group delimiter=" ">
                    <text term="accessed"/>
                    <date variable="accessed" form="text"/>
                  </group>
                </group>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="author-count">
        <names variable="author">
          <name form="count"/>
          <substitute>
            <names variable="editor"/>
          </substitute>
        </names>
      </macro>
      <macro name="sort-type">
        <!--This should just sort secondary sources first. I'm leaving the rest from AGLC for simplicity-->
        <choose>
          <if type="book chapter paper-conference article-magazine article-newspaper article-journal manuscript report speech entry-encyclopedia" match="any">
            <text value="1"/>
          </if>
          <else-if type="legal_case">
            <text value="2"/>
            <text variable="title"/>
          </else-if>
          <else-if type="bill legislation" match="any">
            <text value="3"/>
            <choose>
              <if type="legislation">
                <text variable="title"/>
              </if>
            </choose>
          </else-if>
          <else-if type="treaty">
            <text value="4"/>
          </else-if>
          <else>
            <text value="1"/>
          </else>
        </choose>
      </macro>
      <citation et-al-min="4" et-al-use-first="1">
        <layout suffix="." delimiter="; ">
          <choose>
            <if position="ibid-with-locator">
              <group delimiter=" ">
                <text term="ibid" strip-periods="true" text-case="lowercase"/>
                <text variable="locator"/>
              </group>
            </if>
            <else-if position="ibid">
              <text term="ibid" strip-periods="true" text-case="lowercase"/>
            </else-if>
            <else-if position="subsequent">
              <choose>
                <if type="legal_case bill legislation treaty" match="any">
                  <!--don't use short form and above note for legal citations -->
                  <group delimiter=" ">
                    <text macro="author-note"/>
                    <text macro="title-short"/>
                    <text macro="looseleaf-note"/>
                    <choose>
                      <if type="legislation" match="none">
                        <text variable="first-reference-note-number" prefix="(n " suffix=")"/>
                      </if>
                    </choose>
                    <text macro="locator-basic"/>
                  </group>
                </if>
                <else>
                  <group delimiter=" ">
                    <group delimiter=", ">
                      <text macro="author-short"/>
                      <choose>
                        <if disambiguate="true">
                          <text macro="title-short"/>
                        </if>
                      </choose>
                    </group>
                    <text variable="first-reference-note-number" prefix="(n " suffix=")"/>
                    <text macro="locator-basic"/>
                  </group>
                </else>
              </choose>
            </else-if>
            <else>
              <!--general whole citation -->
              <group delimiter=" ">
                <group delimiter=", ">
                  <group delimiter=" ">
                    <group delimiter=", ">
                      <text macro="author-note"/>
                      <group>
                        <text macro="title"/>
                        <text macro="book-container"/>
                      </group>
                      <text macro="broadcast-container"/>
                      <text macro="volume-book"/>
                      <text macro="looseleaf-note"/>
                    </group>
                    <group delimiter=" ">
                      <text macro="date-parenthesis"/>
                      <text macro="bill-number"/>
                      <text macro="article-case-info"/>
                      <text macro="publisher"/>
                    </group>
                  </group>
                  <text macro="treaty-catchall"/>
                </group>
                <group delimiter=", ">
                  <group delimiter=" ">
                    <text macro="page-first"/>
                    <text macro="court"/>
                    <text macro="locator-space"/>
                  </group>
                  <text macro="locator-comma"/>
                </group>
                <text macro="URL"/>
              </group>
            </else>
          </choose>
        </layout>
      </citation>
      <bibliography et-al-min="4" et-al-use-first="1" subsequent-author-substitute="&#8212;&#8212;">
        <sort>
          <key macro="sort-type"/>
          <key macro="author" names-min="1" names-use-first="1"/>
          <key macro="author-count" names-min="2" names-use-first="2"/>
          <key macro="author"/>
          <key variable="issued"/>
          <key variable="title"/>
        </sort>
        <layout>
          <group delimiter=" ">
            <group delimiter=", ">
              <group delimiter=" ">
                <group delimiter=", ">
                  <text macro="author"/>
                  <group>
                    <text macro="title"/>
                    <text macro="book-container"/>
                  </group>
                  <text macro="broadcast-container"/>
                  <text macro="volume-book"/>
                  <text macro="looseleaf-note"/>
                </group>
                <group delimiter=" ">
                  <text macro="date-parenthesis"/>
                  <text macro="bill-number"/>
                  <text macro="article-case-info"/>
                  <text macro="publisher"/>
                </group>
              </group>
              <text macro="treaty-catchall"/>
            </group>
            <group delimiter=" ">
              <text macro="page-first"/>
              <text macro="court"/>
            </group>
            <text macro="URL"/>
          </group>
        </layout>
      </bibliography>
    </style>
    `
  },
  {
    name: 'IEEE',
    key: `ieee`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only">
      <info>
        <title>IEEE</title>
        <id>http://www.zotero.org/styles/ieee</id>
        <link href="http://www.zotero.org/styles/ieee" rel="self"/>
        <!-- <link href="https://ieeeauthorcenter.ieee.org/wp-content/uploads/IEEE-Reference-Guide.pdf" rel="documentation"/> - 2018 guidelines -->
        <link href="http://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf" rel="documentation"/>
        <link href="https://journals.ieeeauthorcenter.ieee.org/your-role-in-article-production/ieee-editorial-style-manual/" rel="documentation"/>
        <author>
          <name>Michael Berkowitz</name>
          <email>mberkowi@gmu.edu</email>
        </author>
        <contributor>
          <name>Julian Onions</name>
          <email>julian.onions@gmail.com</email>
        </contributor>
        <contributor>
          <name>Rintze Zelle</name>
          <uri>http://twitter.com/rintzezelle</uri>
        </contributor>
        <contributor>
          <name>Stephen Frank</name>
          <uri>http://www.zotero.org/sfrank</uri>
        </contributor>
        <contributor>
          <name>Sebastian Karcher</name>
        </contributor>
        <contributor>
          <name>Giuseppe Silano</name>
          <email>g.silano89@gmail.com</email>
          <uri>http://giuseppesilano.net</uri>
        </contributor>
        <contributor>
          <name>Patrick O'Brien</name>
        </contributor>
        <contributor>
          <name>Brenton M. Wiernik</name>
        </contributor>
        <contributor>
          <name>Oliver Couch</name>
          <email>oliver.couch@gmail.com</email>
        </contributor>
        <category citation-format="numeric"/>
        <category field="engineering"/>
        <category field="generic-base"/>
        <summary>IEEE style as per the 2021 guidelines, V 01.29.2021.</summary>
        <updated>2023-04-18T00:52:46+10:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="en">
        <date form="text">
          <date-part name="month" form="short" suffix=" "/>
          <date-part name="day" form="numeric-leading-zeros" suffix=", "/>
          <date-part name="year"/>
        </date>
        <terms>
          <term name="chapter" form="short">ch.</term>
          <term name="presented at">presented at the</term>
          <term name="available at">available</term>
        </terms>
      </locale>
      <!-- Macros -->
      <macro name="status">
        <choose>
          <if variable="page issue volume" match="none">
            <text variable="status" text-case="capitalize-first" suffix="" font-weight="bold"/>
          </if>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if type="bill book chapter graphic legal_case legislation motion_picture paper-conference report song" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short"/>
                </group>
              </if>
              <else>
                <text variable="edition" text-case="capitalize-first" suffix="."/>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="issued">
        <choose>
          <if type="article-journal report" match="any">
            <date variable="issued">
              <date-part name="month" form="short" suffix=" "/>
              <date-part name="year" form="long"/>
            </date>
          </if>
          <else-if type="bill book chapter graphic legal_case legislation song thesis" match="any">
            <date variable="issued">
              <date-part name="year" form="long"/>
            </date>
          </else-if>
          <else-if type="paper-conference" match="any">
            <date variable="issued">
              <date-part name="month" form="short"/>
              <date-part name="year" prefix=" "/>
            </date>
          </else-if>
          <else-if type="motion_picture" match="any">
            <date variable="issued" form="text" prefix="(" suffix=")"/>
          </else-if>
          <else>
            <date variable="issued" form="text"/>
          </else>
        </choose>
      </macro>
      <macro name="author">
        <names variable="author">
          <name and="text" et-al-min="7" et-al-use-first="1" initialize-with=". "/>
          <label form="short" prefix=", " text-case="capitalize-first"/>
          <et-al font-style="italic"/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
          </substitute>
        </names>
      </macro>
      <macro name="editor">
        <names variable="editor">
          <name initialize-with=". " delimiter=", " and="text"/>
          <label form="short" prefix=", " text-case="capitalize-first"/>
        </names>
      </macro>
      <macro name="locators">
        <group delimiter=", ">
          <text macro="edition"/>
          <group delimiter=" ">
            <text term="volume" form="short"/>
            <number variable="volume" form="numeric"/>
          </group>
          <group delimiter=" ">
            <number variable="number-of-volumes" form="numeric"/>
            <text term="volume" form="short" plural="true"/>
          </group>
          <group delimiter=" ">
            <text term="issue" form="short"/>
            <number variable="issue" form="numeric"/>
          </group>
        </group>
      </macro>
      <macro name="title">
        <choose>
          <if type="bill book graphic legal_case legislation motion_picture song" match="any">
            <text variable="title" font-style="italic"/>
          </if>
          <else>
            <text variable="title" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="publisher">
        <choose>
          <if type="bill book chapter graphic legal_case legislation motion_picture paper-conference song" match="any">
            <group delimiter=": ">
              <text variable="publisher-place"/>
              <text variable="publisher"/>
            </group>
          </if>
          <else>
            <group delimiter=", ">
              <text variable="publisher"/>
              <text variable="publisher-place"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="event">
        <choose>
          <!-- Published Conference Paper -->
          <if type="paper-conference speech" match="any">
            <choose>
              <if variable="container-title" match="any">
                <group delimiter=" ">
                  <text term="in"/>
                  <text variable="container-title" font-style="italic"/>
                </group>
              </if>
              <!-- Unpublished Conference Paper -->
              <else>
                <group delimiter=" ">
                  <text term="presented at"/>
                  <text variable="event"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="access">
        <choose>
          <if type="webpage post post-weblog" match="any">
            <!-- https://url.com/ (accessed Mon. DD, YYYY). -->
            <choose>
              <if variable="URL">
                <group prefix=" " delimiter=" ">
                  <text variable="URL"/>
                  <group delimiter=" " prefix="(" suffix=").">
                    <text term="accessed"/>
                    <date variable="accessed" form="text"/>
                  </group>
                </group>
              </if>
            </choose>
          </if>
          <else-if match="any" variable="DOI">
            <!-- doi: 10.1000/xyz123. -->
            <text variable="DOI" prefix=" doi: " suffix="."/>
          </else-if>
          <else-if variable="URL">
            <!-- Accessed: Mon. DD, YYYY. [Medium]. Available: https://URL.com/ -->
            <group delimiter=". " prefix=" " suffix=". ">
              <!-- Accessed: Mon. DD, YYYY. -->
              <group delimiter=": ">
                <text term="accessed" text-case="capitalize-first"/>
                <date variable="accessed" form="text"/>
              </group>
              <!-- [Online Video]. -->
              <group prefix="[" suffix="]" delimiter=" ">
                <choose>
                  <if variable="medium" match="any">
                    <text variable="medium" text-case="capitalize-first"/>
                  </if>
                  <else>
                    <text term="online" text-case="capitalize-first"/>
                    <choose>
                      <if type="motion_picture">
                        <text term="video" text-case="capitalize-first"/>
                      </if>
                    </choose>
                  </else>
                </choose>
              </group>
            </group>
            <!-- Available: https://URL.com/ -->
            <group delimiter=": " prefix=" ">
              <text term="available at" text-case="capitalize-first"/>
              <text variable="URL"/>
            </group>
          </else-if>
        </choose>
      </macro>
      <macro name="page">
        <choose>
          <if type="article-journal" variable="number" match="all">
            <group delimiter=" ">
              <text value="Art."/>
              <text term="issue" form="short"/>
              <text variable="number"/>
            </group>
          </if>
          <else>
            <group delimiter=" ">
              <label variable="page" form="short"/>
              <text variable="page"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="citation-locator">
        <group delimiter=" ">
          <choose>
            <if locator="page">
              <label variable="locator" form="short"/>
            </if>
            <else>
              <label variable="locator" form="short" text-case="capitalize-first"/>
            </else>
          </choose>
          <text variable="locator"/>
        </group>
      </macro>
      <macro name="geographic-location">
        <group delimiter=", " suffix=".">
          <choose>
            <if variable="publisher-place">
              <text variable="publisher-place" text-case="title"/>
            </if>
            <else-if variable="event-place">
              <text variable="event-place" text-case="title"/>
            </else-if>
          </choose>
        </group>
      </macro>
      <!-- Series -->
      <macro name="collection">
        <choose>
          <if variable="collection-title" match="any">
            <text term="in" suffix=" "/>
            <group delimiter=", " suffix=". ">
              <text variable="collection-title"/>
              <text variable="collection-number" prefix="no. "/>
              <text variable="volume" prefix="vol. "/>
            </group>
          </if>
        </choose>
      </macro>
      <!-- Citation -->
      <citation collapse="citation-number">
        <sort>
          <key variable="citation-number"/>
        </sort>
        <layout delimiter=", ">
          <group prefix="[" suffix="]" delimiter=", ">
            <text variable="citation-number"/>
            <text macro="citation-locator"/>
          </group>
        </layout>
      </citation>
      <!-- Bibliography -->
      <bibliography entry-spacing="0" second-field-align="flush">
        <layout>
          <!-- Citation Number -->
          <text variable="citation-number" prefix="[" suffix="]"/>
          <!-- Author(s) -->
          <text macro="author" suffix=", "/>
          <!-- Rest of Citation -->
          <choose>
            <!-- Specific Formats -->
            <if type="article-journal">
              <group delimiter=", ">
                <text macro="title"/>
                <text variable="container-title" font-style="italic" form="short"/>
                <text macro="locators"/>
                <text macro="page"/>
                <text macro="issued"/>
                <text macro="status"/>
              </group>
              <choose>
                <if variable="URL DOI" match="none">
                  <text value="."/>
                </if>
                <else>
                  <text value=","/>
                </else>
              </choose>
              <text macro="access"/>
            </if>
            <else-if type="paper-conference speech" match="any">
              <group delimiter=", " suffix=", ">
                <text macro="title"/>
                <text macro="event"/>
                <text macro="editor"/>
              </group>
              <text macro="collection"/>
              <group delimiter=", " suffix=".">
                <text macro="publisher"/>
                <text macro="issued"/>
                <text macro="page"/>
                <text macro="status"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else-if type="chapter">
              <group delimiter=", " suffix=", ">
                <text macro="title"/>
                <group delimiter=" ">
                  <text term="in" suffix=" "/>
                  <text variable="container-title" font-style="italic"/>
                </group>
              </group>
              <text macro="editor" suffix=", "/>
              <text macro="edition"/>
              <text macro="collection"/>
              <group delimiter=", " suffix=".">
                <text macro="publisher"/>
                <text macro="issued"/>
                <text macro="page"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else-if type="report">
              <group delimiter=", " suffix=".">
                <text macro="title"/>
                <text macro="publisher"/>
                <group delimiter=" ">
                  <text variable="genre"/>
                  <text variable="number"/>
                </group>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else-if type="thesis">
              <group delimiter=", " suffix=".">
                <text macro="title"/>
                <text variable="genre"/>
                <text macro="publisher"/>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else-if type="webpage post-weblog post" match="any">
              <group delimiter=", " suffix=".">
                <text macro="title"/>
                <text variable="container-title" font-style="italic"/>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else-if type="patent">
              <group delimiter=", ">
                <text macro="title"/>
                <text variable="number"/>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else-if>
            <!-- Online Video -->
            <else-if type="motion_picture">
              <text macro="geographic-location" suffix=". "/>
              <group delimiter=", " suffix=".">
                <text macro="title"/>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else-if>
            <!-- Generic/Fallback Formats -->
            <else-if type="bill book graphic legal_case legislation report song" match="any">
              <group delimiter=", " suffix=". ">
                <text macro="title"/>
                <text macro="locators"/>
              </group>
              <text macro="collection"/>
              <group delimiter=", " suffix=".">
                <text macro="publisher"/>
                <text macro="issued"/>
                <text macro="page"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else-if type="article-magazine article-newspaper broadcast interview manuscript map patent personal_communication song speech thesis webpage" match="any">
              <group delimiter=", " suffix=".">
                <text macro="title"/>
                <text variable="container-title" font-style="italic"/>
                <text macro="locators"/>
                <text macro="publisher"/>
                <text macro="page"/>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else-if>
            <else>
              <group delimiter=", " suffix=". ">
                <text macro="title"/>
                <text variable="container-title" font-style="italic"/>
                <text macro="locators"/>
              </group>
              <text macro="collection"/>
              <group delimiter=", " suffix=".">
                <text macro="publisher"/>
                <text macro="page"/>
                <text macro="issued"/>
              </group>
              <text macro="access"/>
            </else>
          </choose>
        </layout>
      </bibliography>
    </style>
    `,
  },
  {
    name: 'Chicago Manual of Style 16th edition (author-date)',
    key: `chicago-author-date-16th-edition`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="display-and-sort" page-range-format="chicago">
      <info>
        <title>Chicago Manual of Style 16th edition (author-date)</title>
        <id>http://www.zotero.org/styles/chicago-author-date-16th-edition</id>
        <link href="http://www.zotero.org/styles/chicago-author-date-16th-edition" rel="self"/>
        <link href="http://www.chicagomanualofstyle.org/tools_citationguide.html" rel="documentation"/>
        <author>
          <name>Julian Onions</name>
          <email>julian.onions@gmail.com</email>
        </author>
        <contributor>
          <name>Sebastian Karcher</name>
        </contributor>
        <contributor>
          <name>Richard Karnesky</name>
          <email>karnesky+zotero@gmail.com</email>
          <uri>http://arc.nucapt.northwestern.edu/Richard_Karnesky</uri>
        </contributor>
        <contributor>
          <name>Andrew Dunning</name>
          <uri>https://orcid.org/0000-0003-0464-5036</uri>
        </contributor>
        <contributor>
          <name>Brenton M. Wiernik</name>
        </contributor>
        <category citation-format="author-date"/>
        <category field="generic-base"/>
        <summary>The author-date variant of the Chicago style</summary>
        <updated>2017-10-12T12:00:00+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="en">
        <terms>
          <term name="editor" form="verb-short">ed.</term>
          <term name="container-author" form="verb">by</term>
          <term name="translator" form="verb-short">trans.</term>
          <term name="editortranslator" form="verb">edited and translated by</term>
          <term name="translator" form="short">trans.</term>
        </terms>
      </locale>
      <macro name="secondary-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="none">
            <group delimiter=". ">
              <names variable="editor translator" delimiter=". ">
                <label form="verb" text-case="capitalize-first" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
              <names variable="director" delimiter=". ">
                <label form="verb" text-case="capitalize-first" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="container-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <group prefix=", " delimiter=", ">
              <names variable="container-author" delimiter=", ">
                <label form="verb" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
              <names variable="editor translator" delimiter=", ">
                <label form="verb" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="editor">
        <names variable="editor">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="translator">
        <names variable="translator">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="recipient">
        <choose>
          <if type="personal_communication">
            <choose>
              <if variable="genre">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
              <else>
                <text term="letter" text-case="capitalize-first"/>
              </else>
            </choose>
          </if>
        </choose>
        <names variable="recipient" delimiter=", ">
          <label form="verb" prefix=" " text-case="lowercase" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="substitute-title">
        <choose>
          <if type="article-magazine article-newspaper review review-book" match="any">
            <text macro="container-title"/>
          </if>
        </choose>
      </macro>
      <macro name="contributors">
        <group delimiter=". ">
          <names variable="author">
            <name and="text" name-as-sort-order="first" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=", "/>
            <substitute>
              <names variable="editor"/>
              <names variable="translator"/>
              <names variable="director"/>
              <text macro="substitute-title"/>
              <text macro="title"/>
            </substitute>
          </names>
          <text macro="recipient"/>
        </group>
      </macro>
      <macro name="contributors-short">
        <names variable="author">
          <name form="short" and="text" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <names variable="director"/>
            <text macro="substitute-title"/>
            <text macro="title"/>
          </substitute>
        </names>
      </macro>
      <macro name="interviewer">
        <names variable="interviewer" delimiter=", ">
          <label form="verb" prefix=" " text-case="capitalize-first" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="archive">
        <group delimiter=". ">
          <text variable="archive_location" text-case="capitalize-first"/>
          <text variable="archive"/>
          <text variable="archive-place"/>
        </group>
      </macro>
      <macro name="access">
        <group delimiter=". ">
          <choose>
            <if type="graphic report" match="any">
              <text macro="archive"/>
            </if>
            <else-if type="article-journal bill book chapter legal_case legislation motion_picture paper-conference" match="none">
              <text macro="archive"/>
            </else-if>
          </choose>
          <choose>
            <if type="webpage post-weblog" match="any">
              <date variable="issued" delimiter=" ">
                <date-part name="month"/>
                <date-part name="day"/>
              </date>
            </if>
          </choose>
          <choose>
            <if variable="issued" match="none">
              <group delimiter=" ">
                <text term="accessed" text-case="capitalize-first"/>
                <date variable="accessed" delimiter=" ">
                  <date-part name="month"/>
                  <date-part name="day"/>
                </date>
              </group>
            </if>
          </choose>
          <choose>
            <if type="legal_case" match="none">
              <choose>
                <if variable="DOI">
                  <text variable="DOI" prefix="doi:"/>
                </if>
                <else>
                  <text variable="URL"/>
                </else>
              </choose>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="title">
        <choose>
          <if variable="title" match="none">
            <choose>
              <if type="personal_communication" match="none">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
            </choose>
          </if>
          <else-if type="bill book graphic legislation motion_picture song" match="any">
            <text variable="title" text-case="title" font-style="italic"/>
            <group prefix=" (" suffix=")" delimiter=" ">
              <text term="version"/>
              <text variable="version"/>
            </group>
          </else-if>
          <else-if variable="reviewed-author">
            <choose>
              <if variable="reviewed-title">
                <group delimiter=". ">
                  <text variable="title" text-case="title" quotes="true"/>
                  <group delimiter=", ">
                    <text variable="reviewed-title" text-case="title" font-style="italic" prefix="Review of "/>
                    <names variable="reviewed-author">
                      <label form="verb-short" text-case="lowercase" suffix=" "/>
                      <name and="text" delimiter=", "/>
                    </names>
                  </group>
                </group>
              </if>
              <else>
                <group delimiter=", ">
                  <text variable="title" text-case="title" font-style="italic" prefix="Review of "/>
                  <names variable="reviewed-author">
                    <label form="verb-short" text-case="lowercase" suffix=" "/>
                    <name and="text" delimiter=", "/>
                  </names>
                </group>
              </else>
            </choose>
          </else-if>
          <else-if type="legal_case interview patent" match="any">
            <text variable="title"/>
          </else-if>
          <else>
            <text variable="title" text-case="title" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" " prefix=". ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short" strip-periods="true"/>
                </group>
              </if>
              <else>
                <text variable="edition" text-case="capitalize-first" prefix=". "/>
              </else>
            </choose>
          </if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" " prefix=", ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short"/>
                </group>
              </if>
              <else>
                <text variable="edition" prefix=", "/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators">
        <choose>
          <if type="article-journal">
            <choose>
              <if variable="volume">
                <text variable="volume" prefix=" "/>
                <group prefix=" (" suffix=")">
                  <choose>
                    <if variable="issue">
                      <text variable="issue"/>
                    </if>
                    <else>
                      <date variable="issued">
                        <date-part name="month"/>
                      </date>
                    </else>
                  </choose>
                </group>
              </if>
              <else-if variable="issue">
                <group delimiter=" " prefix=", ">
                  <text term="issue" form="short"/>
                  <text variable="issue"/>
                  <date variable="issued" prefix="(" suffix=")">
                    <date-part name="month"/>
                  </date>
                </group>
              </else-if>
              <else>
                <date variable="issued" prefix=", ">
                  <date-part name="month"/>
                </date>
              </else>
            </choose>
          </if>
          <else-if type="legal_case">
            <text variable="volume" prefix=", "/>
            <text variable="container-title" prefix=" "/>
            <text variable="page" prefix=" "/>
          </else-if>
          <else-if type="bill book graphic legal_case legislation motion_picture report song" match="any">
            <group prefix=". " delimiter=". ">
              <group>
                <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                <number variable="volume" form="numeric"/>
              </group>
              <group>
                <number variable="number-of-volumes" form="numeric"/>
                <text term="volume" form="short" prefix=" " plural="true"/>
              </group>
            </group>
          </else-if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="page" match="none">
                <group prefix=". ">
                  <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                  <number variable="volume" form="numeric"/>
                </group>
              </if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-chapter">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="page">
                <group prefix=", ">
                  <text variable="volume" suffix=":"/>
                  <text variable="page"/>
                </group>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-article">
        <choose>
          <if type="article-newspaper">
            <group prefix=", " delimiter=", ">
              <group delimiter=" ">
                <text variable="edition"/>
                <text term="edition"/>
              </group>
              <group>
                <text term="section" form="short" suffix=" "/>
                <text variable="section"/>
              </group>
            </group>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume issue" match="any">
                <text variable="page" prefix=": "/>
              </if>
              <else>
                <text variable="page" prefix=", "/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="point-locators">
        <choose>
          <if variable="locator">
            <choose>
              <if locator="page" match="none">
                <choose>
                  <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                    <choose>
                      <if variable="volume">
                        <group>
                          <text term="volume" form="short" suffix=" "/>
                          <number variable="volume" form="numeric"/>
                          <label variable="locator" form="short" prefix=", " suffix=" "/>
                        </group>
                      </if>
                      <else>
                        <label variable="locator" form="short" suffix=" "/>
                      </else>
                    </choose>
                  </if>
                  <else>
                    <label variable="locator" form="short" suffix=" "/>
                  </else>
                </choose>
              </if>
              <else-if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                <number variable="volume" form="numeric" suffix=":"/>
              </else-if>
            </choose>
            <text variable="locator"/>
          </if>
        </choose>
      </macro>
      <macro name="container-prefix">
        <text term="in" text-case="capitalize-first"/>
      </macro>
      <macro name="container-title">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <text macro="container-prefix" suffix=" "/>
          </if>
        </choose>
        <choose>
          <if type="legal_case" match="none">
            <text variable="container-title" text-case="title" font-style="italic"/>
          </if>
        </choose>
      </macro>
      <macro name="publisher">
        <group delimiter=": ">
          <text variable="publisher-place"/>
          <text variable="publisher"/>
        </group>
      </macro>
      <macro name="date">
        <choose>
          <if variable="issued">
            <group delimiter=" ">
              <date variable="original-date" form="text" date-parts="year" prefix="(" suffix=")"/>
              <date variable="issued">
                <date-part name="year"/>
              </date>
            </group>
          </if>
          <else-if variable="accessed">
            <date variable="accessed">
              <date-part name="year"/>
            </date>
          </else-if>
          <else-if variable="status">
            <text variable="status" text-case="capitalize-first"/>
          </else-if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="date-in-text">
        <choose>
          <if variable="issued">
            <group delimiter=" ">
              <date variable="original-date" form="text" date-parts="year" prefix="[" suffix="]"/>
              <date variable="issued">
                <date-part name="year"/>
              </date>
            </group>
          </if>
          <else-if variable="accessed">
            <date variable="accessed">
              <date-part name="year"/>
            </date>
          </else-if>
          <else-if variable="status">
            <text variable="status"/>
          </else-if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="day-month">
        <date variable="issued">
          <date-part name="month"/>
          <date-part name="day" prefix=" "/>
        </date>
      </macro>
      <macro name="collection-title">
        <choose>
          <if match="none" type="article-journal">
            <choose>
              <if match="none" is-numeric="collection-number">
                <group delimiter=", ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="collection-title-journal">
        <choose>
          <if type="article-journal">
            <group delimiter=" ">
              <text variable="collection-title"/>
              <text variable="collection-number"/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="event">
        <group delimiter=" ">
          <choose>
            <if variable="genre">
              <text term="presented at"/>
            </if>
            <else>
              <text term="presented at" text-case="capitalize-first"/>
            </else>
          </choose>
          <text variable="event"/>
        </group>
      </macro>
      <macro name="description">
        <choose>
          <if type="interview">
            <group delimiter=". ">
              <text macro="interviewer"/>
              <text variable="medium" text-case="capitalize-first"/>
            </group>
          </if>
          <else-if type="patent">
            <group delimiter=" " prefix=". ">
              <text variable="authority"/>
              <text variable="number"/>
            </group>
          </else-if>
          <else>
            <text variable="medium" text-case="capitalize-first" prefix=". "/>
          </else>
        </choose>
        <choose>
          <if variable="title" match="none"/>
          <else-if type="thesis personal_communication speech" match="any"/>
          <else>
            <group delimiter=" " prefix=". ">
              <text variable="genre" text-case="capitalize-first"/>
              <choose>
                <if type="report">
                  <text variable="number"/>
                </if>
              </choose>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="issue">
        <choose>
          <if type="legal_case">
            <text variable="authority" prefix=". "/>
          </if>
          <else-if type="speech">
            <group prefix=". " delimiter=", ">
              <group delimiter=" ">
                <text variable="genre" text-case="capitalize-first"/>
                <text macro="event"/>
              </group>
              <text variable="event-place"/>
              <text macro="day-month"/>
            </group>
          </else-if>
          <else-if type="article-newspaper article-magazine personal_communication" match="any">
            <text macro="day-month" prefix=", "/>
          </else-if>
          <else-if type="patent">
            <group delimiter=", " prefix=", ">
              <group delimiter=" ">
                <!--Needs Localization-->
                <text value="filed"/>
                <date variable="submitted" form="text"/>
              </group>
              <group delimiter=" ">
                <choose>
                  <if variable="issued submitted" match="all">
                    <text term="and"/>
                  </if>
                </choose>
                <!--Needs Localization-->
                <text value="issued"/>
                <date variable="issued" form="text"/>
              </group>
            </group>
          </else-if>
          <else>
            <group prefix=". " delimiter=", ">
              <choose>
                <if type="thesis">
                  <text variable="genre" text-case="capitalize-first"/>
                </if>
              </choose>
              <text macro="publisher"/>
            </group>
          </else>
        </choose>
      </macro>
      <citation et-al-min="4" et-al-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" givenname-disambiguation-rule="primary-name" collapse="year">
        <layout prefix="(" suffix=")" delimiter="; ">
          <group delimiter=", ">
            <choose>
              <if variable="issued accessed" match="any">
                <group delimiter=" ">
                  <text macro="contributors-short"/>
                  <text macro="date-in-text"/>
                </group>
              </if>
              <!---comma before forthcoming and n.d.-->
              <else>
                <group delimiter=", ">
                  <text macro="contributors-short"/>
                  <text macro="date-in-text"/>
                </group>
              </else>
            </choose>
            <text macro="point-locators"/>
          </group>
        </layout>
      </citation>
      <bibliography hanging-indent="true" et-al-min="11" et-al-use-first="7" subsequent-author-substitute="&#8212;&#8212;&#8212;" entry-spacing="0">
        <sort>
          <key macro="contributors"/>
          <key variable="issued"/>
          <key variable="title"/>
        </sort>
        <layout suffix=".">
          <group delimiter=". ">
            <text macro="contributors"/>
            <text macro="date"/>
            <text macro="title"/>
          </group>
          <text macro="description"/>
          <text macro="secondary-contributors" prefix=". "/>
          <text macro="container-title" prefix=". "/>
          <text macro="container-contributors"/>
          <text macro="edition"/>
          <text macro="locators-chapter"/>
          <text macro="collection-title-journal" prefix=", " suffix=", "/>
          <text macro="locators"/>
          <text macro="collection-title" prefix=". "/>
          <text macro="issue"/>
          <text macro="locators-article"/>
          <text macro="access" prefix=". "/>
        </layout>
      </bibliography>
    </style>`,
  },
  {
    name: 'Chicago Manual of Style 16th edition (full note)',
    key: `chicago-fullnote-bibliography-16th-edition`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="note" version="1.0" demote-non-dropping-particle="display-and-sort" page-range-format="chicago">
      <info>
        <title>Chicago Manual of Style 16th edition (full note)</title>
        <id>http://www.zotero.org/styles/chicago-fullnote-bibliography-16th-edition</id>
        <link href="http://www.zotero.org/styles/chicago-fullnote-bibliography-16th-edition" rel="self"/>
        <link href="http://www.chicagomanualofstyle.org/tools_citationguide.html" rel="documentation"/>
        <author>
          <name>Julian Onions</name>
          <email>julian.onions@gmail.com</email>
        </author>
        <contributor>
          <name>Simon Kornblith</name>
          <email>simon@simonster.com</email>
        </contributor>
        <contributor>
          <name>Elena Razlogova</name>
          <email>elena.razlogova@gmail.com</email>
        </contributor>
        <contributor>
          <name>Frank Bennett</name>
          <email>biercenator@gmail.com</email>
        </contributor>
        <contributor>
          <name>Andrew Dunning</name>
          <uri>https://orcid.org/0000-0003-0464-5036</uri>
        </contributor>
        <contributor>
          <name>Brenton M. Wiernik</name>
        </contributor>
        <category citation-format="note"/>
        <category field="generic-base"/>
        <summary>Chicago format with full notes and bibliography</summary>
        <updated>2017-10-12T12:00:00+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="en">
        <terms>
          <term name="editor" form="verb-short">ed.</term>
          <term name="translator" form="verb-short">trans.</term>
          <term name="translator" form="short">trans.</term>
          <term name="editortranslator" form="verb-short">ed. and trans.</term>
          <term name="editortranslator" form="verb">Edited and translated by</term>
          <term name="translator" form="short">trans.</term>
        </terms>
      </locale>
      <macro name="editor-translator">
        <group delimiter=", ">
          <group delimiter=" ">
            <choose>
              <if variable="container-author reviewed-author" match="any">
                <group>
                  <names variable="container-author reviewed-author">
                    <label form="verb-short" text-case="lowercase" suffix=" "/>
                    <name and="text" delimiter=", "/>
                  </names>
                </group>
              </if>
            </choose>
          </group>
          <names variable="editor translator" delimiter=", ">
            <label form="verb-short" text-case="lowercase" suffix=" "/>
            <name and="text" delimiter=", "/>
          </names>
        </group>
      </macro>
      <macro name="secondary-contributors-note">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="none">
            <text macro="editor-translator"/>
          </if>
        </choose>
      </macro>
      <macro name="container-contributors-note">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <text macro="editor-translator"/>
          </if>
        </choose>
      </macro>
      <macro name="secondary-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="none">
            <names variable="editor translator" delimiter=". ">
              <label form="verb" text-case="capitalize-first" suffix=" "/>
              <name and="text" delimiter=", "/>
            </names>
          </if>
        </choose>
      </macro>
      <macro name="container-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <group delimiter=", ">
              <choose>
                <if variable="author">
                  <choose>
                    <if variable="container-author" match="any">
                      <names variable="container-author">
                        <label form="verb-short" text-case="lowercase" suffix=" "/>
                        <name and="text" delimiter=", "/>
                      </names>
                    </if>
                  </choose>
                  <!--This includes page numers after the container author, e.g. for Introductions -->
                  <choose>
                    <if variable="container-author author" match="all">
                      <group delimiter=". ">
                        <text variable="page"/>
                        <names variable="editor translator" delimiter=", ">
                          <label form="verb" suffix=" "/>
                          <name and="text" delimiter=", "/>
                        </names>
                      </group>
                    </if>
                    <else>
                      <names variable="editor translator" delimiter=", ">
                        <label form="verb" text-case="lowercase" suffix=" "/>
                        <name and="text" delimiter=", "/>
                      </names>
                    </else>
                  </choose>
                </if>
              </choose>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="recipient-note">
        <names variable="recipient" delimiter=", ">
          <label form="verb" text-case="lowercase" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="contributors-note">
        <group delimiter=" ">
          <names variable="author">
            <name and="text" sort-separator=", " delimiter=", "/>
            <label form="short" prefix=", "/>
            <substitute>
              <names variable="editor"/>
              <names variable="translator"/>
            </substitute>
          </names>
          <text macro="recipient-note"/>
        </group>
      </macro>
      <macro name="editor">
        <names variable="editor">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="translator">
        <names variable="translator">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="verb-short" prefix=", "/>
        </names>
      </macro>
      <macro name="recipient">
        <group delimiter=" ">
          <choose>
            <if type="personal_communication">
              <choose>
                <if variable="genre">
                  <text variable="genre" text-case="capitalize-first"/>
                </if>
                <else>
                  <text term="letter" text-case="capitalize-first"/>
                </else>
              </choose>
            </if>
          </choose>
          <text macro="recipient-note"/>
        </group>
      </macro>
      <macro name="contributors">
        <group delimiter=". ">
          <names variable="author">
            <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
            <substitute>
              <text macro="editor"/>
              <text macro="translator"/>
              <choose>
                <if type="article-magazine article-newspaper webpage post-weblog" match="any">
                  <text variable="container-title"/>
                </if>
              </choose>
            </substitute>
          </names>
          <text macro="recipient"/>
        </group>
      </macro>
      <macro name="recipient-short">
        <names variable="recipient">
          <label form="verb" text-case="lowercase" suffix=" "/>
          <name form="short" and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="contributors-short">
        <group delimiter=" ">
          <names variable="author">
            <name form="short" and="text" delimiter=", "/>
            <substitute>
              <names variable="editor"/>
              <names variable="translator"/>
            </substitute>
          </names>
          <text macro="recipient-short"/>
        </group>
      </macro>
      <macro name="contributors-sort">
        <names variable="author">
          <name name-as-sort-order="all" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <text macro="title"/>
          </substitute>
        </names>
      </macro>
      <macro name="interviewer-note">
        <names variable="interviewer" delimiter=", ">
          <label form="verb" text-case="lowercase" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="interviewer">
        <names variable="interviewer" delimiter=", ">
          <label form="verb" text-case="capitalize-first" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="title-note">
        <choose>
          <if variable="title" match="none">
            <text variable="genre"/>
          </if>
          <else-if type="book graphic motion_picture song" match="any">
            <text variable="title" text-case="title" font-style="italic"/>
            <group delimiter=" " prefix=", ">
              <text term="version"/>
              <text variable="version"/>
            </group>
          </else-if>
          <else-if type="legal_case interview patent" match="any">
            <text variable="title"/>
          </else-if>
          <else-if variable="reviewed-author">
            <text variable="title" font-style="italic" prefix="review of "/>
          </else-if>
          <else>
            <text variable="title" text-case="title" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="title">
        <choose>
          <if variable="title" match="none">
            <choose>
              <if type="personal_communication" match="none">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
            </choose>
          </if>
          <else-if type="book graphic motion_picture song" match="any">
            <text variable="title" text-case="title" font-style="italic"/>
            <group prefix=" (" suffix=")" delimiter=" ">
              <text term="version"/>
              <text variable="version"/>
            </group>
          </else-if>
          <else-if variable="reviewed-author">
            <group delimiter=", ">
              <text variable="title" font-style="italic" prefix="Review of "/>
              <names variable="reviewed-author">
                <label form="verb-short" text-case="lowercase" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </else-if>
          <else-if type="bill legislation legal_case interview patent" match="any">
            <text variable="title"/>
          </else-if>
          <else>
            <text variable="title" text-case="title" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="title-short">
        <choose>
          <if variable="title" match="none">
            <choose>
              <if type="interview">
                <text term="interview"/>
              </if>
              <else-if type="manuscript speech" match="any">
                <text variable="genre" form="short"/>
              </else-if>
              <else-if type="personal_communication">
                <text macro="issued"/>
              </else-if>
            </choose>
          </if>
          <else-if type="book graphic motion_picture song" match="any">
            <text variable="title" text-case="title" form="short" font-style="italic"/>
          </else-if>
          <else-if type="legal_case" variable="title-short" match="all">
            <text variable="title" font-style="italic" form="short"/>
          </else-if>
          <else-if type="patent interview" match="any">
            <text variable="title" form="short"/>
          </else-if>
          <else-if type="legal_case bill legislation" match="any">
            <text variable="title"/>
          </else-if>
          <else>
            <text variable="title" text-case="title" form="short" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="date-disambiguate">
        <choose>
          <if disambiguate="true">
            <text macro="issued"/>
          </if>
        </choose>
      </macro>
      <macro name="description-note">
        <group delimiter=", ">
          <text macro="interviewer-note"/>
          <text variable="medium"/>
          <choose>
            <if variable="title" match="none"/>
            <else-if type="manuscript thesis speech" match="any"/>
            <else-if type="patent">
              <group delimiter=" ">
                <text variable="authority"/>
                <text variable="number"/>
              </group>
            </else-if>
            <else>
              <text variable="genre"/>
            </else>
          </choose>
        </group>
      </macro>
      <macro name="description">
        <group delimiter=", ">
          <group delimiter=". ">
            <text macro="interviewer"/>
            <text variable="medium" text-case="capitalize-first"/>
          </group>
          <choose>
            <if variable="title" match="none"/>
            <else-if type="thesis speech" match="any"/>
            <else-if type="patent">
              <group delimiter=" ">
                <text variable="authority"/>
                <text variable="number"/>
              </group>
            </else-if>
            <else>
              <text variable="genre" text-case="capitalize-first"/>
            </else>
          </choose>
        </group>
      </macro>
      <macro name="container-title-note">
        <group delimiter=" ">
          <choose>
            <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
              <text term="in"/>
            </if>
          </choose>
          <choose>
            <if type="bill legislation legal_case" match="none">
              <text variable="container-title" text-case="title" font-style="italic"/>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="container-title">
        <group delimiter=" ">
          <choose>
            <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
              <text term="in" text-case="capitalize-first"/>
            </if>
          </choose>
          <choose>
            <if type="bill legislation legal_case" match="none">
              <text variable="container-title" text-case="title" font-style="italic"/>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="collection-title">
        <choose>
          <if match="none" type="article-journal">
            <choose>
              <if match="none" is-numeric="collection-number">
                <group delimiter=", ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="collection-title-journal">
        <choose>
          <if type="article-journal">
            <group delimiter=" ">
              <text variable="collection-title"/>
              <text variable="collection-number"/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="edition-note">
        <choose>
          <if type="book chapter graphic motion_picture paper-conference report song" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short"/>
                </group>
              </if>
              <else>
                <text variable="edition"/>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if type="book chapter graphic motion_picture paper-conference report song" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short"/>
                </group>
              </if>
              <else>
                <text variable="edition" text-case="capitalize-first" suffix="."/>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-note-join-with-space">
        <choose>
          <if type="article-journal" variable="volume" match="all">
            <choose>
              <if match="none" variable="collection-title">
                <text macro="locators-note"/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-note-join-with-comma">
        <choose>
          <if type="article-journal" match="none">
            <text macro="locators-note"/>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume" match="none">
                <text macro="locators-note"/>
              </if>
              <else-if match="any" variable="collection-title">
                <text macro="locators-note"/>
              </else-if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-note">
        <choose>
          <if type="article-journal">
            <group delimiter=", ">
              <text macro="collection-title-journal"/>
              <number variable="volume"/>
              <group delimiter=" ">
                <text term="issue" form="short"/>
                <number variable="issue"/>
              </group>
            </group>
          </if>
          <else-if type="bill legislation legal_case" match="any">
            <text macro="legal-cites"/>
          </else-if>
          <else-if type="book chapter graphic motion_picture paper-conference report song" match="any">
            <group delimiter=", ">
              <text macro="edition-note"/>
              <group delimiter=" ">
                <text term="volume" form="short"/>
                <number variable="volume" form="numeric"/>
              </group>
              <choose>
                <if variable="locator" match="none">
                  <group delimiter=" ">
                    <number variable="number-of-volumes" form="numeric"/>
                    <text term="volume" form="short" plural="true"/>
                  </group>
                </if>
              </choose>
            </group>
          </else-if>
        </choose>
      </macro>
      <macro name="legal-cites">
        <choose>
          <if type="legal_case" match="any">
            <group delimiter=" ">
              <choose>
                <if variable="container-title">
                  <text variable="volume"/>
                  <text variable="container-title"/>
                  <group delimiter=" ">
                    <!--change to label variable="section" as that becomes available -->
                    <text term="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                  <text variable="page"/>
                </if>
                <else>
                  <text variable="number" prefix="No. "/>
                </else>
              </choose>
            </group>
          </if>
          <else-if type="bill legislation" match="any">
            <group delimiter=", ">
              <choose>
                <if variable="number">
                  <!--There's a public law number-->
                  <text variable="number" prefix="Pub. L. No. "/>
                  <group delimiter=" ">
                    <!--change to label variable="section" as that becomes available -->
                    <text term="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                  <group delimiter=" ">
                    <text variable="volume"/>
                    <text variable="container-title"/>
                    <text variable="page-first"/>
                  </group>
                </if>
                <else>
                  <group delimiter=" ">
                    <text variable="volume"/>
                    <text variable="container-title"/>
                    <!--change to label variable="section" as that becomes available -->
                    <text term="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                </else>
              </choose>
            </group>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-join-with-space">
        <choose>
          <if type="article-journal" variable="volume" match="all">
            <choose>
              <if match="none" variable="collection-title">
                <text macro="locators"/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-join-with-comma">
        <choose>
          <if type="bill chapter legislation legal_case paper-conference" match="any">
            <text macro="locators"/>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume" match="none">
                <text macro="locators"/>
              </if>
              <else-if match="any" variable="collection-title">
                <text macro="locators"/>
              </else-if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-join-with-period">
        <choose>
          <if type="bill legislation legal_case article-journal chapter paper-conference" match="none">
            <text macro="locators"/>
          </if>
        </choose>
      </macro>
      <macro name="locators">
        <choose>
          <if type="article-journal">
            <group delimiter=", ">
              <text macro="collection-title-journal"/>
              <number variable="volume"/>
              <group delimiter=" ">
                <text term="issue" form="short"/>
                <number variable="issue"/>
              </group>
            </group>
          </if>
          <else-if type="bill legislation legal_case" match="any">
            <text macro="legal-cites"/>
          </else-if>
          <else-if type="book graphic motion_picture report song" match="any">
            <group delimiter=". ">
              <text macro="edition"/>
              <group delimiter=" ">
                <text term="volume" form="short" text-case="capitalize-first"/>
                <number variable="volume" form="numeric"/>
              </group>
              <group delimiter=" ">
                <number variable="number-of-volumes" form="numeric"/>
                <text term="volume" form="short" plural="true"/>
              </group>
            </group>
          </else-if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <group delimiter=". ">
              <text macro="edition"/>
              <choose>
                <if variable="page" match="none">
                  <group delimiter=" ">
                    <text term="volume" form="short" text-case="capitalize-first"/>
                    <number variable="volume" form="numeric"/>
                  </group>
                </if>
              </choose>
            </group>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-newspaper">
        <choose>
          <if type="article-newspaper">
            <group delimiter=", ">
              <group delimiter=" ">
                <number variable="edition"/>
                <text term="edition"/>
              </group>
              <group delimiter=" ">
                <text term="section" form="short"/>
                <text variable="section"/>
              </group>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="event-note">
        <text variable="event"/>
      </macro>
      <macro name="event">
        <choose>
          <if variable="title">
            <group delimiter=" ">
              <choose>
                <if variable="genre">
                  <text term="presented at"/>
                </if>
                <else>
                  <text term="presented at" text-case="capitalize-first"/>
                </else>
              </choose>
              <text variable="event"/>
            </group>
          </if>
          <else>
            <group delimiter=" ">
              <text term="presented at" text-case="capitalize-first"/>
              <text variable="event"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="originally-published">
        <group delimiter=", ">
          <group delimiter=": ">
            <text variable="original-publisher-place"/>
            <text variable="original-publisher"/>
          </group>
          <date variable="original-date" form="text" date-parts="year"/>
        </group>
      </macro>
      <macro name="reprint-note">
        <!--needs localization-->
        <choose>
          <if variable="original-date issued" match="all">
            <choose>
              <!--for whatever reason in notes, when we have both original and new publishers, reprint doesn't appear-->
              <if variable="original-publisher original-publisher-place" match="none">
                <text value="repr."/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="reprint">
        <!--needs localization-->
        <choose>
          <if variable="original-date issued" match="all">
            <text value="reprint" text-case="capitalize-first"/>
          </if>
        </choose>
      </macro>
      <macro name="publisher">
        <choose>
          <if type="thesis">
            <text variable="publisher"/>
          </if>
          <else-if type="speech">
            <text variable="event-place"/>
          </else-if>
          <else>
            <group delimiter=": ">
              <text variable="publisher-place"/>
              <text variable="publisher"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="issued">
        <choose>
          <if variable="issued">
            <choose>
              <if type="graphic report" match="any">
                <date variable="issued" form="text"/>
              </if>
              <else-if type="legal_case">
                <group delimiter=" ">
                  <text variable="authority"/>
                  <choose>
                    <if variable="container-title" match="any">
                      <!--Only print year for cases published in reporters-->
                      <date variable="issued" form="numeric" date-parts="year"/>
                    </if>
                    <else>
                      <date variable="issued" form="text"/>
                    </else>
                  </choose>
                </group>
              </else-if>
              <else-if type="book bill chapter graphic legislation motion_picture paper-conference report song thesis" match="any">
                <date variable="issued">
                  <date-part name="year"/>
                </date>
              </else-if>
              <else-if type="patent">
                <group delimiter=", ">
                  <group delimiter=" ">
                    <!--Needs Localization-->
                    <text value="filed"/>
                    <date variable="submitted" form="text"/>
                  </group>
                  <group delimiter=" ">
                    <choose>
                      <if variable="issued submitted" match="all">
                        <text term="and"/>
                      </if>
                    </choose>
                    <!--Needs Localization-->
                    <text value="issued"/>
                    <date variable="issued" form="text"/>
                  </group>
                </group>
              </else-if>
              <else>
                <date variable="issued" form="text"/>
              </else>
            </choose>
          </if>
          <else-if variable="status">
            <text variable="status"/>
          </else-if>
          <else-if variable="accessed URL" match="all"/>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="point-locators-subsequent">
        <choose>
          <if type="legal_case" variable="locator" match="all">
            <choose>
              <if locator="page">
                <group delimiter=":">
                  <number variable="volume"/>
                  <text variable="locator"/>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <label variable="locator" form="short"/>
                  <text variable="locator"/>
                </group>
              </else>
            </choose>
          </if>
          <else-if variable="locator">
            <choose>
              <if locator="page" match="none">
                <group delimiter=" ">
                  <choose>
                    <if type="book graphic motion_picture report song" match="any">
                      <choose>
                        <if variable="volume">
                          <group delimiter=", ">
                            <group delimiter=" ">
                              <text term="volume" form="short"/>
                              <number variable="volume" form="numeric"/>
                            </group>
                            <label variable="locator" form="short"/>
                          </group>
                        </if>
                        <else>
                          <label variable="locator" form="short"/>
                        </else>
                      </choose>
                    </if>
                    <else>
                      <label variable="locator" form="short"/>
                    </else>
                  </choose>
                  <text variable="locator"/>
                </group>
              </if>
              <else-if type="book graphic motion_picture report song" match="any">
                <group delimiter=":">
                  <number variable="volume" form="numeric"/>
                  <text variable="locator"/>
                </group>
              </else-if>
              <else>
                <text variable="locator"/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="point-locators-join-with-colon">
        <choose>
          <if type="article-journal">
            <choose>
              <if variable="locator page" match="any">
                <choose>
                  <if variable="volume issue" match="any">
                    <text macro="point-locators"/>
                  </if>
                </choose>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="point-locators-join-with-comma">
        <choose>
          <if type="article-journal" match="none">
            <text macro="point-locators"/>
          </if>
          <else-if variable="volume issue" match="none">
            <text macro="point-locators"/>
          </else-if>
        </choose>
      </macro>
      <macro name="point-locators">
        <choose>
          <if variable="locator" match="none">
            <choose>
              <if type="article-journal chapter paper-conference" match="any">
                <text variable="page"/>
              </if>
            </choose>
          </if>
          <else-if type="article-journal">
            <group delimiter=" ">
              <choose>
                <if locator="page" match="none">
                  <label variable="locator" form="short" suffix=" "/>
                </if>
              </choose>
              <text variable="locator"/>
            </group>
          </else-if>
          <else-if type="legal_case"/>
          <else>
            <group delimiter=" ">
              <choose>
                <if locator="page" match="none">
                  <label variable="locator" form="short"/>
                </if>
              </choose>
              <text variable="locator"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="locators-chapter">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="author container-author" match="all"/>
              <else>
                <choose>
                  <if variable="page">
                    <number variable="volume" suffix=":"/>
                    <text variable="page"/>
                  </if>
                </choose>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-journal-join-with-colon">
        <choose>
          <if type="article-journal">
            <choose>
              <if variable="volume issue" match="any">
                <text variable="page"/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-journal-join-with-comma">
        <choose>
          <if type="article-journal">
            <choose>
              <if variable="volume issue" match="none">
                <text variable="page"/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="archive-note">
        <choose>
          <if type="thesis">
            <group delimiter=" ">
              <text variable="archive"/>
              <text variable="archive_location" prefix="(" suffix=")"/>
            </group>
          </if>
          <else>
            <group delimiter=", ">
              <text variable="archive_location"/>
              <text variable="archive"/>
              <text variable="archive-place"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="archive">
        <choose>
          <if type="thesis">
            <group delimiter=" ">
              <text variable="archive"/>
              <text variable="archive_location" prefix="(" suffix=")"/>
            </group>
          </if>
          <else>
            <group delimiter=". ">
              <text variable="archive_location" text-case="capitalize-first"/>
              <text variable="archive"/>
              <text variable="archive-place"/>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="issue-note-join-with-space">
        <choose>
          <if type="article-journal bill legislation legal_case manuscript thesis" variable="publisher-place publisher" match="any">
            <!--Chicago doesn't use publisher/place for Newspapers and we want the date delimited by a comma-->
            <choose>
              <if type="article-newspaper" match="none">
                <choose>
                  <if type="article-journal" match="none">
                    <text macro="issue-note"/>
                  </if>
                  <else-if variable="issue volume" match="any">
                    <text macro="issue-note"/>
                  </else-if>
                </choose>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="issue-note-join-with-comma">
        <choose>
          <if type="article-journal bill legislation legal_case manuscript thesis" variable="publisher-place publisher" match="none">
            <text macro="issue-note"/>
          </if>
          <else-if type="article-newspaper">
            <text macro="issue-note"/>
          </else-if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume issue" match="none">
                <text macro="issue-note"/>
              </if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="issue-note">
        <choose>
          <if type="bill legislation legal_case" match="any">
            <text macro="issued" prefix="(" suffix=")"/>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume issue" match="any">
                <text macro="issued" prefix="(" suffix=")"/>
              </if>
              <else>
                <text macro="issued"/>
              </else>
            </choose>
          </else-if>
          <else-if type="article-newspaper">
            <text macro="issued"/>
          </else-if>
          <else-if variable="publisher-place event-place publisher genre" match="any">
            <group prefix="(" suffix=")" delimiter=", ">
              <choose>
                <if variable="title" match="none"/>
                <else-if type="manuscript thesis speech" match="any">
                  <text variable="genre"/>
                </else-if>
              </choose>
              <text macro="event-note"/>
              <group delimiter="; ">
                <text macro="originally-published"/>
                <group delimiter=", ">
                  <text macro="reprint-note"/>
                  <text macro="publisher"/>
                </group>
              </group>
              <text macro="issued"/>
            </group>
          </else-if>
          <else>
            <text macro="issued"/>
          </else>
        </choose>
      </macro>
      <macro name="issue-join-with-space">
        <choose>
          <if type="article-journal" match="any">
            <choose>
              <if variable="issue volume" match="any">
                <text macro="issue"/>
              </if>
            </choose>
          </if>
          <else-if type="bill legislation legal_case" match="any">
            <text macro="issue"/>
          </else-if>
        </choose>
      </macro>
      <macro name="issue-join-with-period">
        <choose>
          <if type="article-journal bill legislation legal_case" match="none">
            <choose>
              <if type="speech" variable="publisher publisher-place" match="any">
                <text macro="issue"/>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="issue-join-with-comma">
        <choose>
          <if type="bill legislation legal_case" match="none">
            <choose>
              <if type="article-journal" match="none">
                <choose>
                  <if type="speech" variable="publisher publisher-place" match="none">
                    <text macro="issue"/>
                  </if>
                </choose>
              </if>
              <else-if variable="volume issue" match="none">
                <text macro="issue"/>
              </else-if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="issue">
        <choose>
          <if type="bill legislation legal_case" match="any">
            <text macro="issued" prefix="(" suffix=")"/>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="issue volume" match="any">
                <text macro="issued" prefix="(" suffix=")"/>
              </if>
              <else>
                <text macro="issued"/>
              </else>
            </choose>
          </else-if>
          <else-if type="speech">
            <group delimiter=", ">
              <group delimiter=" ">
                <choose>
                  <if variable="title" match="none"/>
                  <else>
                    <text variable="genre" text-case="capitalize-first"/>
                  </else>
                </choose>
                <text macro="event"/>
              </group>
              <text variable="event-place"/>
              <text macro="issued"/>
            </group>
          </else-if>
          <!--Chicago doesn't use publisher/place for Newspapers -->
          <else-if type="article-newspaper">
            <text macro="issued"/>
          </else-if>
          <else-if variable="publisher-place publisher" match="any">
            <group delimiter=", ">
              <choose>
                <if type="thesis">
                  <text variable="genre" text-case="capitalize-first"/>
                </if>
              </choose>
              <group delimiter=". ">
                <text macro="originally-published"/>
                <group delimiter=", ">
                  <text macro="reprint"/>
                  <text macro="publisher"/>
                </group>
              </group>
              <text macro="issued"/>
            </group>
          </else-if>
          <else>
            <text macro="issued"/>
          </else>
        </choose>
      </macro>
      <macro name="access-note">
        <group delimiter=", ">
          <choose>
            <if type="graphic report" match="any">
              <text macro="archive-note"/>
            </if>
            <else-if type="article-journal bill book chapter legal_case legislation motion_picture paper-conference" match="none">
              <text macro="archive-note"/>
            </else-if>
          </choose>
          <choose>
            <if variable="issued" match="none">
              <group delimiter=" ">
                <text term="accessed"/>
                <date variable="accessed" form="text"/>
              </group>
            </if>
          </choose>
          <choose>
            <if type="legal_case" match="none">
              <choose>
                <if variable="DOI">
                  <text variable="DOI" prefix="doi:"/>
                </if>
                <else>
                  <text variable="URL"/>
                </else>
              </choose>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="access">
        <group delimiter=". ">
          <choose>
            <if type="graphic report" match="any">
              <text macro="archive"/>
            </if>
            <else-if type="article-journal bill book chapter legal_case legislation motion_picture paper-conference" match="none">
              <text macro="archive"/>
            </else-if>
          </choose>
          <choose>
            <if variable="issued" match="none">
              <group delimiter=" ">
                <text term="accessed" text-case="capitalize-first"/>
                <date variable="accessed" form="text"/>
              </group>
            </if>
          </choose>
          <choose>
            <if type="legal_case" match="none">
              <choose>
                <if variable="DOI">
                  <text variable="DOI" prefix="doi:"/>
                </if>
                <else>
                  <text variable="URL"/>
                </else>
              </choose>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="case-locator-subsequent">
        <choose>
          <if type="legal_case">
            <group delimiter=" ">
              <text variable="volume"/>
              <text variable="container-title"/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="case-pinpoint-subsequent">
        <choose>
          <if type="legal_case">
            <group delimiter=" ">
              <choose>
                <if locator="page">
                  <text term="at"/>
                  <text variable="locator"/>
                </if>
                <else>
                  <label variable="locator"/>
                  <text variable="locator"/>
                </else>
              </choose>
            </group>
          </if>
        </choose>
      </macro>
      <citation et-al-min="4" et-al-use-first="1" disambiguate-add-names="true">
        <layout suffix="." delimiter="; ">
          <choose>
            <if position="ibid-with-locator">
              <group delimiter=", ">
                <text term="ibid"/>
                <text macro="point-locators-subsequent"/>
              </group>
            </if>
            <else-if position="ibid">
              <text term="ibid"/>
            </else-if>
            <else-if position="subsequent">
              <group delimiter=", ">
                <text macro="contributors-short"/>
                <group delimiter=" ">
                  <group delimiter=", ">
                    <text macro="title-short"/>
                    <!--if title & author are the same: -->
                    <text macro="date-disambiguate"/>
                    <text macro="case-locator-subsequent"/>
                  </group>
                  <text macro="case-pinpoint-subsequent"/>
                </group>
                <choose>
                  <if match="none" type="legal_case">
                    <text macro="point-locators-subsequent"/>
                  </if>
                </choose>
              </group>
            </else-if>
            <else>
              <group delimiter=", ">
                <group delimiter=": ">
                  <group delimiter=", ">
                    <group delimiter=" ">
                      <group delimiter=", ">
                        <group delimiter=" ">
                          <group delimiter=", ">
                            <group delimiter=", ">
                              <text macro="contributors-note"/>
                              <text macro="title-note"/>
                            </group>
                            <text macro="description-note"/>
                            <text macro="secondary-contributors-note"/>
                            <text macro="container-title-note"/>
                            <text macro="container-contributors-note"/>
                          </group>
                          <text macro="locators-note-join-with-space"/>
                        </group>
                        <text macro="locators-note-join-with-comma"/>
                        <text macro="collection-title"/>
                        <text macro="issue-note-join-with-comma"/>
                      </group>
                      <text macro="issue-note-join-with-space"/>
                    </group>
                    <text macro="locators-newspaper"/>
                    <text macro="point-locators-join-with-comma"/>
                  </group>
                  <text macro="point-locators-join-with-colon"/>
                </group>
                <text macro="access-note"/>
              </group>
            </else>
          </choose>
        </layout>
      </citation>
      <bibliography hanging-indent="true" et-al-min="11" et-al-use-first="7" subsequent-author-substitute="&#8212;&#8212;&#8212;" entry-spacing="0">
        <sort>
          <key macro="contributors-sort"/>
          <key variable="title"/>
          <key variable="genre"/>
          <key variable="issued"/>
        </sort>
        <layout suffix=".">
          <group delimiter=". ">
            <group delimiter=": ">
              <group delimiter=", ">
                <group delimiter=" ">
                  <group delimiter=". ">
                    <group delimiter=" ">
                      <group delimiter=", ">
                        <group delimiter=". ">
                          <group delimiter=". ">
                            <text macro="contributors"/>
                            <text macro="title"/>
                          </group>
                          <text macro="description"/>
                          <text macro="secondary-contributors"/>
                          <group delimiter=", ">
                            <text macro="container-title"/>
                            <text macro="container-contributors"/>
                          </group>
                          <text macro="locators-join-with-period"/>
                        </group>
                        <text macro="locators-join-with-comma"/>
                        <text macro="locators-chapter"/>
                      </group>
                      <text macro="locators-join-with-space"/>
                    </group>
                    <text macro="collection-title"/>
                    <text macro="issue-join-with-period"/>
                  </group>
                  <text macro="issue-join-with-space"/>
                </group>
                <text macro="issue-join-with-comma"/>
                <text macro="locators-journal-join-with-comma"/>
                <text macro="locators-newspaper"/>
              </group>
              <text macro="locators-journal-join-with-colon"/>
            </group>
            <text macro="access"/>
          </group>
        </layout>
      </bibliography>
    </style>`,
  },
  {
    name: 'Turabian 9th edition (author-date)',
    key: `turabian-author-date`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="display-and-sort" page-range-format="chicago">
      <info>
        <title>Turabian 9th edition (author-date)</title>
        <id>http://www.zotero.org/styles/turabian-author-date</id>
        <link href="http://www.zotero.org/styles/turabian-author-date" rel="self"/>
        <link href="http://www.zotero.org/styles/chicago-author-date" rel="template"/>
        <link href="http://www.chicagomanualofstyle.org/tools_citationguide.html" rel="documentation"/>
        <author>
          <name>Tony Chuang</name>
          <email>zcchuang@tiu.edu</email>
        </author>
        <contributor>
          <name>J. David Stark</name>
          <email>david@jdavidstark.com</email>
          <uri>https://www.jdavidstark.com/</uri>
        </contributor>
        <category citation-format="author-date"/>
        <category field="generic-base"/>
        <summary>The author-date variant of the Turabian 9th edition - Based on Chicago 17th (author-date)</summary>
        <updated>2021-10-29T15:28:42+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="en">
        <terms>
          <term name="editor" form="verb-short">ed.</term>
          <term name="container-author" form="verb">by</term>
          <term name="translator" form="verb-short">trans.</term>
          <term name="editortranslator" form="verb">edited and translated by</term>
          <term name="translator" form="short">trans.</term>
        </terms>
      </locale>
      <macro name="secondary-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="none">
            <group delimiter=". ">
              <names variable="editor translator" delimiter=". ">
                <label form="verb" text-case="capitalize-first" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
              <names variable="director" delimiter=". ">
                <label form="verb" text-case="capitalize-first" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="container-contributors">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <group prefix=", " delimiter=", ">
              <names variable="container-author" delimiter=", ">
                <label form="verb" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
              <names variable="editor translator" delimiter=", ">
                <label form="verb" suffix=" "/>
                <name and="text" delimiter=", "/>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="editor">
        <names variable="editor">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="translator">
        <names variable="translator">
          <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
        </names>
      </macro>
      <macro name="recipient">
        <choose>
          <if type="personal_communication">
            <choose>
              <if variable="genre">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
              <else>
                <text term="letter" text-case="capitalize-first"/>
              </else>
            </choose>
          </if>
        </choose>
        <names variable="recipient" delimiter=", ">
          <label form="verb" prefix=" " text-case="lowercase" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="substitute-title">
        <choose>
          <if type="article-magazine article-newspaper review review-book" match="any">
            <text macro="container-title"/>
          </if>
        </choose>
      </macro>
      <macro name="contributors">
        <group delimiter=". ">
          <names variable="author">
            <name and="text" name-as-sort-order="first" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=", "/>
            <substitute>
              <names variable="editor"/>
              <names variable="translator"/>
              <names variable="director"/>
              <text macro="substitute-title"/>
              <text macro="title"/>
            </substitute>
          </names>
          <text macro="recipient"/>
        </group>
      </macro>
      <macro name="contributors-short">
        <names variable="author">
          <name form="short" and="text" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <names variable="director"/>
            <text macro="substitute-title"/>
            <text macro="title"/>
          </substitute>
        </names>
      </macro>
      <macro name="interviewer">
        <names variable="interviewer" delimiter=", ">
          <label form="verb" prefix=" " text-case="capitalize-first" suffix=" "/>
          <name and="text" delimiter=", "/>
        </names>
      </macro>
      <macro name="archive">
        <group delimiter=". ">
          <text variable="archive_location" text-case="capitalize-first"/>
          <text variable="archive"/>
          <text variable="archive-place"/>
        </group>
      </macro>
      <macro name="access">
        <group delimiter=". ">
          <choose>
            <if type="graphic report" match="any">
              <text macro="archive"/>
            </if>
            <else-if type="article-journal bill book chapter legal_case legislation motion_picture paper-conference" match="none">
              <text macro="archive"/>
            </else-if>
          </choose>
          <choose>
            <if type="webpage post-weblog" match="any">
              <date variable="issued" form="text"/>
            </if>
          </choose>
          <choose>
            <if variable="issued" match="none">
              <group delimiter=" ">
                <text term="accessed" text-case="capitalize-first"/>
                <date variable="accessed" form="text"/>
              </group>
            </if>
          </choose>
          <choose>
            <if type="legal_case" match="none">
              <choose>
                <if variable="DOI">
                  <text variable="DOI" prefix="https://doi.org/"/>
                </if>
                <else>
                  <text variable="URL"/>
                </else>
              </choose>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="title">
        <choose>
          <if variable="title" match="none">
            <choose>
              <if type="personal_communication" match="none">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
            </choose>
          </if>
          <else-if type="bill book graphic legislation motion_picture song" match="any">
            <text variable="title" text-case="title" font-style="italic"/>
            <group prefix=" (" suffix=")" delimiter=" ">
              <text term="version"/>
              <text variable="version"/>
            </group>
          </else-if>
          <else-if variable="reviewed-author">
            <choose>
              <if variable="reviewed-title">
                <group delimiter=". ">
                  <text variable="title" text-case="title" quotes="true"/>
                  <group delimiter=", ">
                    <text variable="reviewed-title" text-case="title" font-style="italic" prefix="Review of "/>
                    <names variable="reviewed-author">
                      <label form="verb-short" text-case="lowercase" suffix=" "/>
                      <name and="text" delimiter=", "/>
                    </names>
                  </group>
                </group>
              </if>
              <else>
                <group delimiter=", ">
                  <text variable="title" text-case="title" font-style="italic" prefix="Review of "/>
                  <names variable="reviewed-author">
                    <label form="verb-short" text-case="lowercase" suffix=" "/>
                    <name and="text" delimiter=", "/>
                  </names>
                </group>
              </else>
            </choose>
          </else-if>
          <else-if type="legal_case interview patent" match="any">
            <text variable="title"/>
          </else-if>
          <else>
            <text variable="title" text-case="title" quotes="true"/>
          </else>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" " prefix=". ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short" strip-periods="true"/>
                </group>
              </if>
              <else>
                <text variable="edition" text-case="capitalize-first" prefix=". "/>
              </else>
            </choose>
          </if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if is-numeric="edition">
                <group delimiter=" " prefix=", ">
                  <number variable="edition" form="ordinal"/>
                  <text term="edition" form="short"/>
                </group>
              </if>
              <else>
                <text variable="edition" prefix=", "/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators">
        <choose>
          <if type="article-journal">
            <choose>
              <if variable="volume">
                <text variable="volume" prefix=" "/>
                <group prefix=", no. " suffix="">
                  <choose>
                    <if variable="issue">
                      <text variable="issue"/>
                    </if>
                    <else>
                      <date variable="issued">
                        <date-part name="month"/>
                      </date>
                    </else>
                  </choose>
                </group>
              </if>
              <else-if variable="issue">
                <group delimiter=" " prefix=", ">
                  <text term="issue" form="short"/>
                  <text variable="issue"/>
                </group>
              </else-if>
              <else>
                <date variable="issued" prefix=", ">
                  <date-part name="month"/>
                </date>
              </else>
            </choose>
            <!-- Moving this snippet here allows the season information to be produced properly per Turabian, 9th ed., ยง19.2.5.  -->
            <date variable="issued" prefix=" (" suffix=")">
              <date-part name="month"/>
            </date>
          </if>
          <else-if type="legal_case">
            <text variable="volume" prefix=", "/>
            <text variable="container-title" prefix=" "/>
            <text variable="page" prefix=" "/>
          </else-if>
          <else-if type="bill book graphic legal_case legislation motion_picture report song" match="any">
            <group prefix=". " delimiter=". ">
              <group>
                <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                <number variable="volume" form="numeric"/>
              </group>
              <group>
                <number variable="number-of-volumes" form="numeric"/>
                <text term="volume" form="short" prefix=" " plural="true"/>
              </group>
            </group>
          </else-if>
          <else-if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="page" match="none">
                <group prefix=". ">
                  <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                  <number variable="volume" form="numeric"/>
                </group>
              </if>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="locators-chapter">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <choose>
              <if variable="page">
                <group prefix=", ">
                  <text variable="volume" suffix=":"/>
                  <text variable="page"/>
                </group>
              </if>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="locators-article">
        <choose>
          <if type="article-newspaper">
            <group prefix=", " delimiter=", ">
              <group delimiter=" ">
                <text variable="edition"/>
                <text term="edition"/>
              </group>
              <group>
                <text term="section" form="short" suffix=" "/>
                <text variable="section"/>
              </group>
            </group>
          </if>
          <else-if type="article-journal">
            <choose>
              <if variable="volume issue" match="any">
                <text variable="page" prefix=": "/>
              </if>
              <else>
                <text variable="page" prefix=", "/>
              </else>
            </choose>
          </else-if>
        </choose>
      </macro>
      <macro name="point-locators">
        <choose>
          <if variable="locator">
            <choose>
              <if locator="page" match="none">
                <choose>
                  <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                    <choose>
                      <if variable="volume">
                        <group>
                          <text term="volume" form="short" suffix=" "/>
                          <number variable="volume" form="numeric"/>
                          <label variable="locator" form="short" prefix=", " suffix=" "/>
                        </group>
                      </if>
                      <else>
                        <label variable="locator" form="short" suffix=" "/>
                      </else>
                    </choose>
                  </if>
                  <else>
                    <label variable="locator" form="short" suffix=" "/>
                  </else>
                </choose>
              </if>
              <else-if type="bill book graphic legal_case legislation motion_picture report song" match="any">
                <number variable="volume" form="numeric" suffix=":"/>
              </else-if>
            </choose>
            <text variable="locator"/>
          </if>
        </choose>
      </macro>
      <macro name="container-prefix">
        <text term="in" text-case="capitalize-first"/>
      </macro>
      <macro name="container-title">
        <choose>
          <if type="chapter entry-dictionary entry-encyclopedia paper-conference" match="any">
            <text macro="container-prefix" suffix=" "/>
          </if>
        </choose>
        <choose>
          <if type="webpage">
            <text variable="container-title" text-case="title"/>
          </if>
          <else-if type="legal_case" match="none">
            <group delimiter=" ">
              <text variable="container-title" text-case="title" font-style="italic"/>
              <choose>
                <if type="post-weblog">
                  <text value="(blog)"/>
                </if>
              </choose>
            </group>
          </else-if>
        </choose>
      </macro>
      <macro name="publisher">
        <group delimiter=", ">
          <group delimiter=": ">
            <text variable="publisher-place"/>
            <text variable="publisher"/>
          </group>
          <choose>
            <if type="book chapter" match="any">
              <!--Kindle-Ebook etc.-->
              <text variable="medium"/>
            </if>
          </choose>
        </group>
      </macro>
      <macro name="date">
        <choose>
          <if variable="issued">
            <date variable="issued">
              <date-part name="year"/>
            </date>
          </if>
          <else-if variable="status">
            <text variable="status" text-case="capitalize-first"/>
          </else-if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="original-publication-date">
        <!-- Adds support for placing the original publication date at the end of the reference list entry per Turabian, 9th ed., ยง19.1.4. -->
        <date variable="original-date" form="text" date-parts="year" prefix=" (Orig. pub. " suffix=".)"/>
      </macro>
      <macro name="date-in-text">
        <choose>
          <if variable="issued">
            <group delimiter=" ">
              <date variable="original-date" form="text" date-parts="year" prefix="[" suffix="]"/>
              <date variable="issued">
                <date-part name="year"/>
              </date>
            </group>
          </if>
          <else-if variable="status">
            <text variable="status"/>
          </else-if>
          <else>
            <text term="no date" form="short"/>
          </else>
        </choose>
      </macro>
      <macro name="day-month">
        <date variable="issued">
          <date-part name="month"/>
          <date-part name="day" prefix=" "/>
        </date>
      </macro>
      <macro name="collection-title">
        <choose>
          <if match="none" type="article-journal">
            <choose>
              <if match="none" is-numeric="collection-number">
                <group delimiter=", ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="collection-title" text-case="title"/>
                  <text variable="collection-number"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="collection-title-journal">
        <choose>
          <if type="article-journal">
            <group delimiter=" ">
              <text variable="collection-title"/>
              <text variable="collection-number"/>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="event">
        <group delimiter=" ">
          <choose>
            <if variable="genre">
              <text term="presented at"/>
            </if>
            <else>
              <text term="presented at" text-case="capitalize-first"/>
            </else>
          </choose>
          <text variable="event"/>
        </group>
      </macro>
      <macro name="description">
        <choose>
          <if type="interview">
            <group delimiter=". ">
              <text macro="interviewer"/>
              <text variable="medium" text-case="capitalize-first"/>
            </group>
          </if>
          <else-if type="patent">
            <group delimiter=" " prefix=". ">
              <text variable="authority"/>
              <text variable="number"/>
            </group>
          </else-if>
          <else-if type="book chapter" match="none">
            <text variable="medium" text-case="capitalize-first" prefix=". "/>
          </else-if>
        </choose>
        <choose>
          <if variable="title" match="none"/>
          <else-if type="thesis personal_communication speech" match="any"/>
          <else>
            <group delimiter=" " prefix=". ">
              <text variable="genre" text-case="capitalize-first"/>
              <choose>
                <if type="report">
                  <text variable="number"/>
                </if>
              </choose>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="issue">
        <choose>
          <if type="legal_case">
            <text variable="authority" prefix=". "/>
          </if>
          <else-if type="speech">
            <group prefix=". " delimiter=", ">
              <group delimiter=" ">
                <text variable="genre" text-case="capitalize-first"/>
                <text macro="event"/>
              </group>
              <text variable="event-place"/>
              <text macro="day-month"/>
            </group>
          </else-if>
          <else-if type="article-newspaper article-magazine personal_communication" match="any">
            <date variable="issued" form="text" prefix=", "/>
          </else-if>
          <else-if type="patent">
            <group delimiter=", " prefix=", ">
              <group delimiter=" ">
                <!--Needs Localization-->
                <text value="filed"/>
                <date variable="submitted" form="text"/>
              </group>
              <group delimiter=" ">
                <choose>
                  <if variable="issued submitted" match="all">
                    <text term="and"/>
                  </if>
                </choose>
                <!--Needs Localization-->
                <text value="issued"/>
                <date variable="issued" form="text"/>
              </group>
            </group>
          </else-if>
          <else-if type="article-journal" match="any"/>
          <else>
            <group prefix=". " delimiter=", ">
              <choose>
                <if type="thesis">
                  <text variable="genre" text-case="capitalize-first"/>
                </if>
              </choose>
              <text macro="publisher"/>
            </group>
          </else>
        </choose>
      </macro>
      <citation et-al-min="4" et-al-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" givenname-disambiguation-rule="primary-name" collapse="year" after-collapse-delimiter="; ">
        <layout prefix="(" suffix=")" delimiter="; ">
          <group delimiter=", ">
            <choose>
              <if variable="issued accessed" match="any">
                <group delimiter=" ">
                  <text macro="contributors-short"/>
                  <text macro="date-in-text"/>
                </group>
              </if>
              <!---comma before forthcoming and n.d.-->
              <else>
                <group delimiter=", ">
                  <text macro="contributors-short"/>
                  <text macro="date-in-text"/>
                </group>
              </else>
            </choose>
            <text macro="point-locators"/>
          </group>
        </layout>
      </citation>
      <bibliography hanging-indent="true" et-al-min="11" et-al-use-first="7" subsequent-author-substitute="&#8212;&#8212;&#8212;" entry-spacing="0">
        <sort>
          <key macro="contributors"/>
          <key variable="issued"/>
          <key variable="title"/>
        </sort>
        <layout suffix=".">
          <group suffix=".">
            <group delimiter=". ">
              <text macro="contributors"/>
              <text macro="date"/>
              <text macro="title"/>
            </group>
            <text macro="description"/>
            <text macro="secondary-contributors" prefix=". "/>
            <text macro="container-title" prefix=". "/>
            <text macro="container-contributors"/>
            <text macro="edition"/>
            <text macro="locators-chapter"/>
            <text macro="collection-title-journal" prefix=", " suffix=", "/>
            <text macro="locators"/>
            <text macro="collection-title" prefix=". "/>
            <text macro="issue"/>
            <text macro="locators-article"/>
            <text macro="access" prefix=". "/>
          </group>
          <!-- Adds support for placing the original publication date at the end of the reference list entry per Turabian, 9th ed., ยง19.1.4. -->
          <text macro="original-publication-date"/>
        </layout>
      </bibliography>
    </style>
    `,
  },
  {
    name: `Pacific Science`,
    key: `pacific-science`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never" default-locale="en-US">
      <info>
        <title>Pacific Science</title>
        <id>http://www.zotero.org/styles/pacific-science</id>
        <link href="http://www.zotero.org/styles/pacific-science" rel="self"/>
        <link href="http://www.zotero.org/styles/apa" rel="template"/>
        <link href="https://pacificscience.msubmit.net/cgi-bin/main.plex?form_type=display_auth_instructions" rel="documentation"/>
        <author>
          <name>Pamela Wilson</name>
          <uri>http://twitter.com/pjoellenw</uri>
          <email>pwilson6@hawaii.edu</email>
        </author>
        <category citation-format="author-date"/>
        <category field="biology"/>
        <issn>0030-8870</issn>
        <eissn>1534-6188</eissn>
        <updated>2020-08-19T00:59:23+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <locale xml:lang="en">
        <terms>
          <term name="translator" form="short">trans.</term>
        </terms>
      </locale>
      <macro name="container-contributors">
        <choose>
          <if type="chapter paper-conference" match="any">
            <group delimiter=" ">
              <group delimiter=" ">
                <label variable="page" text-case="capitalize-first"/>
                <text variable="page"/>
              </group>
              <text term="in" font-style="italic"/>
              <names variable="editor" delimiter=", " suffix=" ">
                <name and="text" initialize-with=". " delimiter=", "/>
                <label form="short" prefix=", "/>
                <substitute>
                  <names variable="translator"/>
                </substitute>
              </names>
            </group>
          </if>
        </choose>
      </macro>
      <macro name="secondary-contributors">
        <choose>
          <if type="chapter paper-conference" match="none">
            <names variable="translator" delimiter=", " prefix=" (" suffix=")">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", "/>
              <substitute>
                <names variable="editor"/>
              </substitute>
            </names>
          </if>
        </choose>
      </macro>
      <macro name="author">
        <names variable="author">
          <name name-as-sort-order="first" and="text" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=", "/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <choose>
              <if type="report">
                <text variable="publisher"/>
                <text macro="title"/>
              </if>
              <else>
                <text macro="title"/>
              </else>
            </choose>
          </substitute>
        </names>
      </macro>
      <macro name="author-short">
        <names variable="author">
          <name form="short" and="text" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="editor"/>
            <names variable="translator"/>
            <choose>
              <if type="report">
                <text variable="publisher"/>
                <text variable="title" form="short" font-style="italic"/>
              </if>
              <else-if type="bill book graphic legal_case legislation motion_picture song" match="any">
                <text variable="title" form="short" font-style="italic"/>
              </else-if>
              <else>
                <text variable="title" form="short"/>
              </else>
            </choose>
          </substitute>
        </names>
      </macro>
      <macro name="title">
        <choose>
          <if type="report thesis" match="any">
            <text variable="title" font-style="italic"/>
            <group prefix=" (" suffix=")" delimiter=" ">
              <text variable="genre"/>
              <text variable="number" prefix="No. "/>
            </group>
          </if>
          <else-if type="book graphic motion_picture report song manuscript speech" match="any">
            <text variable="title"/>
          </else-if>
          <else>
            <text variable="title"/>
          </else>
        </choose>
      </macro>
      <macro name="publisher">
        <choose>
          <if type="report thesis" match="any">
            <group delimiter=", ">
              <text variable="publisher"/>
              <text variable="publisher-place"/>
            </group>
          </if>
          <else>
            <group delimiter=", ">
              <choose>
                <if variable="event" match="none">
                  <text variable="genre"/>
                </if>
              </choose>
              <choose>
                <if type="article-journal article-magazine" match="none">
                  <group delimiter=", ">
                    <text variable="publisher"/>
                    <text variable="publisher-place"/>
                  </group>
                </if>
              </choose>
            </group>
          </else>
        </choose>
      </macro>
      <macro name="event">
        <choose>
          <if variable="event">
            <choose>
              <if variable="genre" match="none">
                <text term="presented at" text-case="capitalize-first" suffix=" "/>
                <text variable="event"/>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <text term="presented at"/>
                  <text variable="event"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="issued">
        <choose>
          <if type="bill legal_case legislation" match="none">
            <choose>
              <if variable="issued">
                <group prefix=" " suffix=".">
                  <date variable="issued">
                    <date-part name="year"/>
                  </date>
                  <text variable="year-suffix" font-style="italic"/>
                </group>
              </if>
              <else>
                <group prefix=" " suffix=".">
                  <text term="no date" form="short"/>
                  <text variable="year-suffix" prefix="-" font-style="italic"/>
                </group>
              </else>
            </choose>
          </if>
        </choose>
      </macro>
      <macro name="issued-year">
        <choose>
          <if variable="issued">
            <date variable="issued">
              <date-part name="year"/>
            </date>
            <text variable="year-suffix" font-style="italic"/>
          </if>
          <else>
            <text term="no date" form="short"/>
            <text variable="year-suffix" prefix="-" font-style="italic"/>
          </else>
        </choose>
      </macro>
      <macro name="edition">
        <choose>
          <if is-numeric="edition">
            <group delimiter=" ">
              <number variable="edition" form="ordinal"/>
              <text term="edition" form="short"/>
            </group>
          </if>
          <else>
            <text variable="edition" suffix="."/>
          </else>
        </choose>
      </macro>
      <macro name="locators">
        <choose>
          <if type="article-journal article-magazine" match="any">
            <group prefix=" " delimiter=":">
              <text variable="volume"/>
              <text variable="page"/>
            </group>
          </if>
          <else-if type="article-newspaper">
            <group delimiter=" " prefix=", ">
              <label variable="page" form="short"/>
              <text variable="page"/>
            </group>
          </else-if>
          <else-if type="book graphic motion_picture report song chapter paper-conference" match="any">
            <group prefix=" (" suffix=")" delimiter=", ">
              <text macro="edition"/>
              <group>
                <text term="volume" form="short" plural="true" text-case="capitalize-first" suffix=" "/>
                <number variable="number-of-volumes" form="numeric" prefix="1-"/>
              </group>
              <group>
                <text term="volume" form="short" text-case="capitalize-first" suffix=" "/>
                <number variable="volume" form="numeric"/>
              </group>
            </group>
          </else-if>
          <else-if type="legal_case">
            <group prefix=" (" suffix=")" delimiter=" ">
              <text variable="authority"/>
              <date variable="issued" delimiter=" ">
                <date-part name="month" form="short"/>
                <date-part name="day" suffix=","/>
                <date-part name="year"/>
              </date>
            </group>
          </else-if>
          <else-if type="bill legislation" match="any">
            <date variable="issued" prefix=" (" suffix=")">
              <date-part name="year"/>
            </date>
          </else-if>
        </choose>
      </macro>
      <macro name="citation-locator">
        <group>
          <label variable="locator" form="short"/>
          <text variable="locator" prefix=" "/>
        </group>
      </macro>
      <macro name="container">
        <choose>
          <if type="bill legal_case legislation" match="none">
            <text variable="container-title"/>
          </if>
          <else>
            <group delimiter=" " prefix=", ">
              <choose>
                <if variable="container-title">
                  <text variable="volume"/>
                  <text variable="container-title"/>
                  <group delimiter=" ">
                    <!--change to label variable="section" as that becomes available -->
                    <text term="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                  <text variable="page"/>
                </if>
                <else>
                  <choose>
                    <if type="legal_case">
                      <text variable="number" prefix="No. "/>
                    </if>
                    <else>
                      <text variable="number" prefix="Pub. L. No. "/>
                      <group delimiter=" ">
                        <!--change to label variable="section" as that becomes available -->
                        <text term="section" form="symbol"/>
                        <text variable="section"/>
                      </group>
                    </else>
                  </choose>
                </else>
              </choose>
            </group>
          </else>
        </choose>
      </macro>
      <citation et-al-min="3" et-al-use-first="1" disambiguate-add-year-suffix="true" collapse="year">
        <sort>
          <key macro="issued-year"/>
          <key macro="author"/>
        </sort>
        <layout prefix="(" suffix=")" delimiter="; ">
          <group delimiter=", ">
            <group delimiter=" ">
              <text macro="author-short"/>
              <text macro="issued-year"/>
            </group>
            <text macro="citation-locator"/>
          </group>
        </layout>
      </citation>
      <bibliography et-al-min="8" et-al-use-first="7" entry-spacing="0" subsequent-author-substitute="&#8212;&#8212;&#8212;">
        <sort>
          <key macro="author"/>
          <key macro="issued-year" sort="ascending"/>
        </sort>
        <layout>
          <group suffix=".">
            <group delimiter=". ">
              <text macro="author"/>
              <text macro="issued"/>
            </group>
            <group delimiter=". ">
              <text macro="title" prefix=" "/>
              <group>
                <text macro="container-contributors"/>
                <text macro="secondary-contributors"/>
                <group delimiter=", ">
                  <text macro="container"/>
                  <text variable="collection-title"/>
                </group>
              </group>
            </group>
            <text macro="locators"/>
            <group delimiter=", " prefix=". ">
              <text macro="event"/>
              <text macro="publisher"/>
            </group>
          </group>
        </layout>
      </bibliography>
    </style>
    `
  },
  {
    name: `Oxford University Press SciMed (author-date)`,
    key: `oxford`,
    csl: `<?xml version="1.0" encoding="utf-8"?>
    <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only" default-locale="en-US" page-range-format="minimal">
      <info>
        <title>Oxford University Press SciMed (author-date)</title>
        <id>http://www.zotero.org/styles/oxford-university-press-scimed-author-date</id>
        <link href="http://www.zotero.org/styles/oxford-university-press-scimed-author-date" rel="self"/>
        <link href="http://www.zotero.org/styles/journal-of-internal-medicine" rel="template"/>
        <link href="http://femsre.oxfordjournals.org/for_authors/stylesheet.html" rel="documentation"/>
        <author>
          <name>Sebastian Karcher</name>
        </author>
        <category citation-format="author-date"/>
        <category field="medicine"/>
        <category field="science"/>
        <updated>2012-09-09T21:58:08+00:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
      </info>
      <macro name="editor">
        <names variable="editor">
          <name name-as-sort-order="all" sort-separator=" " initialize-with="" delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")"/>
        </names>
      </macro>
      <macro name="author">
        <group suffix=".">
          <names variable="author">
            <name name-as-sort-order="all" sort-separator=" " initialize-with="" delimiter=", " delimiter-precedes-last="always" delimiter-precedes-et-al="never"/>
            <et-al font-style="italic"/>
            <label form="short" prefix=" " strip-periods="true"/>
            <substitute>
              <names variable="editor"/>
              <text macro="title"/>
            </substitute>
          </names>
        </group>
      </macro>
      <macro name="author-short">
        <names variable="author">
          <name form="short" name-as-sort-order="all" and="text" sort-separator=" " initialize-with="" delimiter=", " delimiter-precedes-last="never" delimiter-precedes-et-al="never"/>
          <et-al font-style="italic"/>
          <substitute>
            <names variable="editor"/>
            <text macro="title"/>
          </substitute>
        </names>
      </macro>
      <macro name="title">
        <choose>
          <if type="bill book graphic legal_case motion_picture report song" match="any">
            <text variable="title" font-style="italic" text-case="title"/>
          </if>
          <else>
            <text variable="title"/>
          </else>
        </choose>
      </macro>
      <macro name="year-date">
        <date variable="issued" form="text" date-parts="year"/>
      </macro>
      <macro name="publisher">
        <group delimiter=": ">
          <text variable="publisher-place"/>
          <text variable="publisher"/>
        </group>
      </macro>
      <macro name="edition">
        <choose>
          <if is-numeric="edition">
            <group delimiter=" ">
              <number variable="edition" form="ordinal"/>
              <text term="edition" form="short"/>
            </group>
          </if>
          <else>
            <text variable="edition" suffix="."/>
          </else>
        </choose>
      </macro>
      <citation collapse="year" disambiguate-add-year-suffix="true" et-al-min="4" et-al-use-first="1">
        <sort>
          <key macro="year-date"/>
        </sort>
        <layout delimiter="; " prefix="(" suffix=")">
          <group delimiter=": ">
            <group delimiter=" ">
              <text macro="author-short"/>
              <text macro="year-date"/>
            </group>
            <text variable="locator"/>
          </group>
        </layout>
      </citation>
      <bibliography hanging-indent="true" et-al-min="4" et-al-use-first="3">
        <sort>
          <key macro="author"/>
          <key macro="year-date"/>
        </sort>
        <layout>
          <text macro="author"/>
          <text macro="title" prefix=" " suffix="."/>
          <choose>
            <if type="bill book graphic legal_case motion_picture report song" match="any">
              <group suffix="." prefix=" " delimiter=". ">
                <text macro="edition"/>
                <text macro="editor"/>
              </group>
              <text prefix=" " macro="publisher"/>
              <group suffix="." prefix=", ">
                <text macro="year-date"/>
                <text variable="page" prefix=":"/>
              </group>
            </if>
            <else-if type="chapter paper-conference" match="any">
              <group prefix=" " delimiter=". ">
                <group delimiter=": ">
                  <text term="in" text-case="capitalize-first"/>
                  <text macro="editor"/>
                </group>
                <text variable="container-title" font-style="italic" text-case="title"/>
                <text variable="volume" prefix="Vol "/>
                <text macro="edition"/>
                <group suffix="." delimiter=", ">
                  <text macro="publisher"/>
                  <date variable="issued">
                    <date-part name="year"/>
                  </date>
                  <text variable="page"/>
                </group>
              </group>
            </else-if>
            <else-if type="article-newspaper">
              <text variable="container-title" font-style="italic" prefix=" " suffix=". "/>
              <choose>
                <if variable="URL">
                  <group delimiter=". " suffix=".">
                    <text variable="URL"/>
                    <group prefix="Published ">
                      <date variable="issued">
                        <date-part name="month" suffix=" "/>
                        <date-part name="day" suffix=", "/>
                        <date-part name="year"/>
                      </date>
                    </group>
                    <group>
                      <text term="accessed" text-case="capitalize-first" suffix=" "/>
                      <date variable="accessed">
                        <date-part name="month" suffix=" "/>
                        <date-part name="day" suffix=", "/>
                        <date-part name="year"/>
                      </date>
                    </group>
                  </group>
                </if>
                <else>
                  <group delimiter=":" suffix=".">
                    <group>
                      <date variable="issued">
                        <date-part name="month" suffix=" "/>
                        <date-part name="day" suffix=", "/>
                        <date-part name="year"/>
                      </date>
                    </group>
                    <text variable="page"/>
                  </group>
                </else>
              </choose>
            </else-if>
            <else>
              <text macro="editor" prefix=" " suffix="."/>
              <group prefix=" " suffix=".">
                <text variable="container-title" font-style="italic" form="short" strip-periods="true"/>
                <group delimiter=";" prefix=" ">
                  <text macro="year-date"/>
                  <text variable="volume" font-weight="bold"/>
                </group>
                <choose>
                  <if variable="page">
                    <text variable="page" prefix=":"/>
                  </if>
                  <else>
                    <text variable="DOI" prefix=", DOI: "/>
                  </else>
                </choose>
              </group>
            </else>
          </choose>
        </layout>
      </bibliography>
    </style>
    `,
  },
] as const
