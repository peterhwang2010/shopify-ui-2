import React from 'react'

let Input = ({text, label, id, name, size, type, defaultValue, value}) => {
  let $text = <p className="next-input__help-text">{text}</p>
  let $label = <label className="next-label" htmlFor="shop_email">{label}</label>
  return (
    <div className="next-input-wrapper">
      { label ? $label : null}
      <input className="next-input" id={id} name={name} size={size} type={type} defaultValue={defaultValue} value={value} />
      { text ? $text : null}
    </div>
  )
}


let AnnotatedSectionAnnotation = ({heading, description}) => (
  <div className="ui-annotated-section__annotation">
    <div className="ui-annotated-section__title">
      <h2 className="next-heading next-heading--no-margin">{heading}</h2>
    </div>
    <div className="ui-annotated-section__description">
      <p>{description}</p>
    </div>
  </div>
)

let AnnotatedSectionContent = () => (
  <div className="ui-annotated-section__content">
    <div className="next-card">
      <div className="section-content">
      <div className="next-card__section">
        <div className="ui-form__section">
          <Input label='Store Name' id='shop_name' name='shop[name]' size={30} type="text" defaultValue="BevyBar"/>
          <div className="ui-form__group">
            <Input label='Account email' id='shop_name' name='shop[name]' size={30} type="text" defaultValue="BevyBar" text="Use this address if we need to contact you about your account."/>
            <Input label='Customer email' id='shop_name' name='shop[name]' size={30} type="text" defaultValue="peter@gmail.com" text="Your customers will see this address if you email them."/>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
)

let AnnotatedSectionContainer = ({children}) => (
  <section className="ui-annotated-section">
    {children}
  </section>
)

let AnnotatedSection = ({heading, description}) => (
  <AnnotatedSectionContainer>
    <AnnotatedSectionAnnotation heading={heading} description={description}/>
    <AnnotatedSectionContent/>
  </AnnotatedSectionContainer>
)

export default AnnotatedSection
