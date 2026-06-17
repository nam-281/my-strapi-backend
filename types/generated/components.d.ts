import type { Schema, Struct } from '@strapi/strapi';

export interface CollectionDesignerFeature extends Struct.ComponentSchema {
  collectionName: 'components_collection_designer_features';
  info: {
    displayName: 'Designer Feature';
  };
  attributes: {
    content: Schema.Attribute.Text;
    detailImage: Schema.Attribute.Media<'images'>;
    eyebrow: Schema.Attribute.String;
    linkHref: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    portraitImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CollectionFilterOption extends Struct.ComponentSchema {
  collectionName: 'components_collection_filter_options';
  info: {
    displayName: 'Filter Option';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['category', 'material', 'designer']> &
      Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CollectionHero extends Struct.ComponentSchema {
  collectionName: 'components_collection_heroes';
  info: {
    displayName: 'Collection Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CollectionNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_collection_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe'>;
    description: Schema.Attribute.Text;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'email@address.com'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonCta extends Struct.ComponentSchema {
  collectionName: 'components_common_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'link']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface CommonImageCard extends Struct.ComponentSchema {
  collectionName: 'components_common_image_cards';
  info: {
    displayName: 'Image Card';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonNavLink extends Struct.ComponentSchema {
  collectionName: 'components_common_nav_links';
  info: {
    displayName: 'Nav Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_quote_blocks';
  info: {
    displayName: 'Quote Block';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    source: Schema.Attribute.String;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    description: 'SEO metadata';
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface HomepageBrandStory extends Struct.ComponentSchema {
  collectionName: 'components_homepage_brand_stories';
  info: {
    displayName: 'Brand Story';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    linkHref: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCurationItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_curation_items';
  info: {
    displayName: 'Curation Item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['large', 'small']> &
      Schema.Attribute.DefaultTo<'small'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Homepage Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    eyebrow: Schema.Attribute.String;
    primaryCta: Schema.Attribute.Component<'common.cta', false>;
    secondaryCta: Schema.Attribute.Component<'common.cta', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageInspirationImage extends Struct.ComponentSchema {
  collectionName: 'components_homepage_inspiration_images';
  info: {
    displayName: 'Inspiration Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface StoryBentoCard extends Struct.ComponentSchema {
  collectionName: 'components_story_bento_cards';
  info: {
    displayName: 'Bento Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    indexLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['text', 'image', 'featured', 'note']
    > &
      Schema.Attribute.DefaultTo<'image'>;
  };
}

export interface StoryChapterSection extends Struct.ComponentSchema {
  collectionName: 'components_story_chapter_sections';
  info: {
    displayName: 'Chapter Section';
  };
  attributes: {
    content: Schema.Attribute.Text;
    imageOne: Schema.Attribute.Media<'images'>;
    imageOneAlt: Schema.Attribute.String;
    imageTwo: Schema.Attribute.Media<'images'>;
    imageTwoAlt: Schema.Attribute.String;
    linkHref: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StoryHero extends Struct.ComponentSchema {
  collectionName: 'components_story_heroes';
  info: {
    displayName: 'Story Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    highlightText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'collection.designer-feature': CollectionDesignerFeature;
      'collection.filter-option': CollectionFilterOption;
      'collection.hero': CollectionHero;
      'collection.newsletter': CollectionNewsletter;
      'common.cta': CommonCta;
      'common.image-card': CommonImageCard;
      'common.nav-link': CommonNavLink;
      'common.quote-block': CommonQuoteBlock;
      'common.seo': CommonSeo;
      'homepage.brand-story': HomepageBrandStory;
      'homepage.curation-item': HomepageCurationItem;
      'homepage.hero': HomepageHero;
      'homepage.inspiration-image': HomepageInspirationImage;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'story.bento-card': StoryBentoCard;
      'story.chapter-section': StoryChapterSection;
      'story.hero': StoryHero;
    }
  }
}
