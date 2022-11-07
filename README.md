# Overview

This repository implements an approach to using SSR in React 18.
React 18 brought new features, one of which is in the experimentation phase is the possibility to stream html with server-side rendering.
This means that the server can send an html to the client which can send the page data without waiting for all the data to load. As the data becomes available the server can send the remaining html.

In the example, we have a screen of posts and authors, when the user accesses the page the server immediately sends the first sessions of the page and while the comments are loaded we display a shimmer effect with the Suspense api. When the server finishes loading the comments magic happens it sends the html to show the posts and React will know exactly where to put html.

## Caveat ⚠️

This code isn't production ready.
As improvements are still lacking as a data fetching strategy, luckily Next 13 has implemented these and is in the beta phase.
