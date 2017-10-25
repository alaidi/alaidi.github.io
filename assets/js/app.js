var config = {
    gcseId: '002495078994964324690:baxgyphtt8i',
    resultsUrl: 'http://alaidi.net',
    searchWrapperClass: 'gcse-search-wrapper',
    resultsWrapperClass: 'gcse-results-wrapper'
  };
  var removePlaceholder = function(div) {
    var inputField = div.querySelector("input.gsc-input");

    // Change the placeholder
    inputField.placeholder = "Search SitePoint";

    // Remove the background
    inputField.style.background = "none";

    // The background will get re-attached on blur, so add an event that will also remove it on blur
    // Another way to do this would be to de-attach the element from the DOM and then re-attach again, hence wiping the listeners
    inputField.addEventListener("blur", function() {
      inputField.style.background = "none";
    });
  };
  var renderSearchForms = function () {
    if (document.readyState == 'complete') {
      queryAndRender();
    } else {
      google.setOnLoadCallback(function () {
        queryAndRender();
      }, true);
    }
  };

  var queryAndRender = function() {
    var gsceSearchForms = document.querySelectorAll('.' + config.searchWrapperClass);
    var gsceResults = document.querySelectorAll('.' + config.resultsWrapperClass);

    if (gsceSearchForms) {
      renderSearch(gsceSearchForms[0]);
    }
    if (gsceResults) {
      renderResults(gsceResults[0]);
    }
  };

  var renderSearch = function (div) {
      google.search.cse.element.render(
        {
          div: div.id,
          tag: 'searchbox-only',
          attributes: {
            resultsUrl: config.resultsUrl
          }
        }
      );
      if (div.dataset &&
          div.dataset.stylingFunction &&
          window[div.dataset.stylingFunction] &&
          typeof window[div.dataset.stylingFunction] === 'function') {
        window[div.dataset.stylingFunction](form);
      }
  };

  var renderResults = function(div) {
    google.search.cse.element.render(
      {
        div: div.id,
        tag: 'searchresults-only'
      });
  };

  window.__gcse = {
    parsetags: 'explicit',
    callback: renderSearchForms
  };

  (function () {
    var cx = config.gcseId;
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
      '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();