var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "0", /* gutter width px || % */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1920px', /* -> @media (max-width: 1100px) */
            'fields': '30px' /* side fields */
        },
        md: {
            'width': '995px',
            'fields': '15px'
        },
        sm: {
            'width': '780px',
            'fields': '15px'
        },
        xs: {
            'width': '560px',
            'fields': '15px'
        }
        /* 
         We can create any quantity of break points.

         some_name: {
         some_width: 'Npx',
         some_offset: 'N(px|%)'
         }
         */
    }
};

smartgrid('../css/sass', settings);