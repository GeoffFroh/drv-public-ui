==========
drv-public-ui
==========

**drv-public-ui** is a front-end ui prototype for the version 2 **ddr-public** web application. The static HTML draft documents are intended to show design and client-side javascript features.

Some general notes of explanation about particular pages:

drv-segmentDetail.html
    The detail page for a single VH segment (`templates/segments/detail.html`?). This template will require both the segement `entity.json` data and the parent interview `entity.json` data in order to render. Note the parent interview info in the right-hand metadata tabbed panel, as well as the full interview list of segments in the tabbed panel under the video window.
    
drv-topicDetail.html
    The detail page for a single topic term (`templates/browse/term.html`). It uses the new tabbed "Gallery"/"List" ui pattern that is now the standard results list layout style for DRV. It will also be incorporated in pages like `templates/search/results.html` and `templates/collections/detail.html`
    
drv-narratorList.html
    The full narrator list (`templates/browse/narrator-detail.html`) -- `/narrators`. Note that while the page uses the gallery/list ui pattern, the particular implementation of is slightly different to support the particular data and ux needs of the narrator data type. In the django template, the code is built directly into the page rather than using the more generic `listobject` and `galleryobject` ui-tags. 

drv-narratorDetail.html
    A single narrator detail result. 

drv-staticPage.html
    An example static content page. In this case, the "Using Visual Histories" page.