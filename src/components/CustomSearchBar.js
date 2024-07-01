import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme/SearchBar';
import algoliasearch from 'algoliasearch/lite';

const CustomSearchBar = () => {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  const getIndexName = (pathname) => {
    const versionMatch = pathname.match(/\/docs\/(v[0-9]+\.[0-9]+\.[0-9]+)\//);
    const version = versionMatch ? versionMatch[1] : siteConfig.customFields.latestVersion;
    return `fidgetechcode_${version.replace(/\./g, "_")}`;
  };

  useEffect(() => {
    const algoliaClient = algoliasearch(
      siteConfig.themeConfig.algolia.appId,
      siteConfig.themeConfig.algolia.apiKey
    );

    const search = instantsearch({
      indexName: getIndexName(window.location.pathname),
      searchClient: algoliaClient,
    });

    // Configure your search as needed
    search.addWidgets([
      instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Search',
      }),
      instantsearch.widgets.hits({
        container: '#hits',
      }),
    ]);

    search.start();

    return () => search.dispose();
  }, [history.location.pathname]);

  return <SearchBar />;
};

export default CustomSearchBar;