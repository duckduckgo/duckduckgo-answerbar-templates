!function(env) {
    
    env.Data.templates = {
        groups: {
            // base: a container
            base: {
                item: 'base_item',
                detail: 'base_detail',
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: false,
                    rowHighlight: false,
                    keySpacing: false,
                    moreAt: false
                }
            },
            // text: text item with title, description, and footer.
            text: {
                item: 'text_item',
                detail: 'text_detail'
            },
            // info: image title description with show more or arbitrary content, right aux, more at
            info: {
                item: 'basic_image_item',
                detail: 'basic_info_detail',
                options: {
                    moreAt: true,
                    aux: false
                }
            },
            products: {
                item: 'products_item',
                detail: 'products_detail',
                item_detail: 'products_item_detail',
                item_detail_media: 'products_item_detail_media',
                wrap_detail: 'base_detail',
                options: {
                    rating: true,
                    price: true,
                    brand: true,
                    hideReviewText: false
                },
                variants: {
                    button: 'primary'
                }
            },
            products_simple: {
                item: 'basic_image_item',
                detail: 'products_detail',
                item_detail: 'products_item_detail',
                wrap_detail: 'base_detail',
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: true,
                    detailMediaShape: 'small'
                }
            },
            movies: {
                item: 'basic_image_item',
                detail: 'products_detail',
                item_detail: 'products_item_detail',
                wrap_detail: 'base_detail',
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: true,
                    detailDark: true,
                    detailMediaWidth: 185
                },
                variants: {
                    tile: 'poster',
                    button: 'primary'
                },
                elClass: {
                    tileBody: 'is-hidden'
                }
            },
            media: {
                item: 'media_item',
                detail: 'basic_info_detail',
                item_detail: 'media_item_detail',
                options: {
                    detailMediaShape: 'short',
                    moreAt: true,
                    aux: false
                }
            },
            icon: {
                item: 'text_item',
                detail: 'basic_icon_detail',
                item_detail: 'products_item_detail'
            },
            places: {
                item: 'places_item',
                detail: 'places_detail'
            },
            list: {
                item: 'text_item',
                detail: 'list_detail'
            },
            images: {
                item: 'images_item',
                item_detail: 'images_detail',
                item_detail_media: 'images_detail_media',
                options: {
                    detailDark: true,
                    noDetailLandscape: true
                },
                variants: {
                    detail: "simple"
                }
            },
            videos: {
                item: 'videos_item',
                item_detail: 'videos_detail',
                item_detail_media: 'videos_detail_media',
                options: {
                    detailDark: true
                },
                variants: {
                    detail: "simple"
                }
            }
        },
        
        viewVariants: {
            bgColor: {
                dark: 'bg-clr--dk',
                dark2: 'bg-clr--dk2',
                light: 'bg-clr--lt',
                light2: 'bg-clr--lt2',
                light3: 'bg-clr--lt3',
                red: 'bg-clr--red',
                redLight: 'bg-clr--red-light',
                redDark: 'bg-clr--red-dark',
                blue: 'bg-clr--blue',
                blueLight: 'bg-clr--blue-light',
                blueDark: 'bg-clr--blue-dark',
                purple: 'bg-clr--purple',
                green: 'bg-clr--green',
                gold: 'bg-clr--gold'
            },
            button: {
                alt: 'btn--alt',
                critical: 'btn--critical',
                primary: 'btn--primary',
                primaryAlt: 'btn--primary--alt',
                secondary: 'btn--secondary'
            },
            detail: {
                simple: "detail--simple",
                light: "detail--l",
                dark: "detail--xd"
            },
            tile: {
                narrow: "tile--c--n",
                wide: "tile--c--w",
                xwide: "tile--c--xw",
                video: "tile--b--i--vid tile--c",
                poster: "tile--b--i--mov  tile--c--n",
                local: {
                    tile: 'tile--loc',
                    tileFront: 'tile--loc__main',
                    tileBack: 'tile--loc__alt'
                },
                basic1: [
                    {tileTitle: '2line'},
                    {tileSnippet: 'small'}
                ],
                basic2: [
                    {tileTitle: '3line-small'},
                    {tileSnippet: 'large'}
                ],
                basic3: [
                    {tileTitle: '3line-large'},
                    {tileSnippet: 'small'}
                ],
                basic4: [
                    {tileTitle: '1line-large'},
                    {tileSnippet: 'large'}
                ]
            },
            tileTitle: {
                '1line': "tile__title--1",
                '1line-large': "tile__title--1lg",
                '2line': "tile__title--2",
                '3line': "tile__title--3",
                '4line': "tile__title--4",
                '3line-small': "tile__title--3sm",
                '3line-large': "tile__title--3lg"
            },
            tileSubtitle: {
                '2line': "tile__sub--2"
            },
            tileSnippet: {
                small: "tile__content--sm",
                large: "tile__content--lg"
            },
            tileFooter: {
                '2line': {
                    tileFoot: 'tile__foot--2',
                    tileBody: 'has-foot--2'
                },
                '3line': {
                    tileFoot: 'tile__foot--3',
                    tileBody: 'has-foot--3'
                },
                '4line': {
                    tileFoot: 'tile__foot--4',
                    tileBody: 'has-foot--4'
                }
            },
            tileRating: {
                starsLeft: 'tile__rating--left',
                starsRight: 'tile__rating--right'
            },
            iconImage: {
                small: 'c-icon__img-wrap--sm',
                medium: 'c-icon__img-wrap--md',
                large: 'c-icon__img-wrap--lg'
            },
            iconBadge: {
                small: 'c-icon__badge--sm',
                medium: 'c-icon__badge--md',
                large: 'c-icon__badge--lg'
            },
            iconTitle: {
                large: 'c-icon__title--lg'
            },
            productSub: {
                noMax: 'c-product__subtitle--nm'
            }
        }
    };
}(DDG);
