export default {
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - Test 123",
                "searchTerms": "Test 123",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "a1cad81dcaad44b91"
            }
        ]
    },
    "searchInformation": {
        "searchTime": 0.377466,
        "formattedSearchTime": "0.38",
        "totalResults": "0",
        "formattedTotalResults": "0"
    }
}
