#!/bin/bash
cp -rav ./* ../../nginx/site/ \
    && cd ../../nginx/ \
    && ./restart.sh