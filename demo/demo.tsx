import React from 'react';
import ReactDOM from 'react-dom';
import Panel from "../src/fd-panels";
import styled, { css } from 'styled-components';

const style = document.createElement('style');
style.setAttribute('id', 'style');
(document.querySelector('main') as HTMLDivElement).appendChild(style);

const main1 = document.createElement('div');
main1.setAttribute('id', 'main1');
(document.querySelector('main') as HTMLDivElement).appendChild(main1);

const main2 = document.createElement('div');
main2.setAttribute('id', 'main2');
(document.querySelector('main') as HTMLDivElement).appendChild(main2);

const aside1 = document.createElement('div');
aside1.setAttribute('id', 'aside1');
(document.querySelector('aside') as HTMLDivElement).appendChild(aside1);

const aside2 = document.createElement('div');
aside2.setAttribute('id', 'aside2');
(document.querySelector('aside') as HTMLDivElement).appendChild(aside2);

const globalStyles = css`
    body {
        margin: 1rem;
    }
`;

const MostReadPanel = styled(Panel)`
    border-bottom: 0;
    article h3 {
        margin-bottom: 0;
    }
`;

ReactDOM.render(
    <style>{globalStyles}</style>,
    style
);

ReactDOM.render(
    <Panel>
        <h2>Volg dit nieuwsverhaal</h2>
        <p>Ontvang een update wanneer we een vervolgartikel plaatsen.</p>
    </Panel>,
    main1);

ReactDOM.render(
    <MostReadPanel className="teaser-most-read" boxShadow={true}>
        <h3>Meest gelezen</h3>
        <div>
            <article>
                <a href="/economie-politiek/1277679/fiod-sluit-net-rond-banken-die-witwaspraktijken-gedogen">
                    <img src="https://images.fd.nl/ZR51sgZcKBp39ZyxJEwi5ORhX6E.jpg?fit=crop&amp;crop=faces&amp;auto=format&amp;fm=jpg&amp;q=45&amp;w=300&amp;h=169&amp;rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663" alt="DE BILT - Portret van Hans van der Vlist, algemeen directeur Fiscale Inlichtingen- en Opsporingsdienst (FIOD) bij een van de teams tijdens de 24-hours challenge. Teams van de FIOD houden in verschillende ruimtes van het AMLC- kantoor (Anti Money Laundering Centre) in De Bilt een '24-hours challenge'. In deze 24 uur werken teams uit vijf verschillende landen nauwgezet samen om systemen en onderzoeken te koppelen en zo tot een betere samenwerking te komen."/>
                    <h3>Fiod sluit net rond banken die witwaspraktijken gedogen</h3>
                </a>
            </article>
            <article>
                <a href="/economie-politiek/1277126/tesla-taks-jaagt-zakelijke-veelrijder-in-vervuilende-diesel">
                    <img src="https://images.fd.nl/m_IVzCyYDe4mhlTljyN1Z_9REvk.jpg?fit=crop&amp;crop=faces&amp;auto=format&amp;fm=jpg&amp;q=45&amp;w=300&amp;h=169&amp;rect=.0%2C.0337078651685393%2C.9999999999999999%2C.8426966292134831" alt="Nederland, Amsterdam  2018,  Tesla opladen op de Herengracht in Amsterdam,     Tesla elektrische auto aan laadpaal elektriciteit oplader opladen auto e-auto laadpaal in Amsterdam centrum binnenstad  Tesla Model S Amsterdam elektrisch  foto: Peter Hilz / HH"/>
                    <h3>'Tesla-taks jaagt zakelijke veelrijder in vervuilende diesel' </h3>
                </a>
            </article>
            <article>
                <a href="/opinie/1277407/hogere-rekenrente-is-greep-in-de-kas-van-jongeren-door-ouderen">
                    <img src="https://images.fd.nl/ukhx8OFKS5WyecSU-A-prT1yoZk.jpg?fit=crop&amp;crop=faces&amp;auto=format&amp;fm=jpg&amp;q=45&amp;w=300&amp;h=169&amp;rect=.0%2C.1711322385479689%2C.9999999999999999%2C.3889369057908384" alt=""/>
                    <h3>Hogere rekenrente is greep in de kas van jongeren door ouderen</h3>
                </a>
            </article>
        </div>
    </MostReadPanel>,
    main2);
    
ReactDOM.render(
    <Panel>
        <h2>Volg dit nieuwsverhaal</h2>
        <p>Ontvang een update wanneer we een vervolgartikel plaatsen.</p>
    </Panel>,
    aside1);
    
ReactDOM.render(
    <Panel className="follow-interests" id="follow-interests" boxShadow={true}>
        <h3><a href="/mijn-nieuws">Volgen via mijn nieuws</a></h3>
        <ul>
            <li>
                <div className="interest-controls-container">
                    <span className="interest" data-key="Kwartaalbericht" data-addurl="/add-interest" data-deleteurl="/delete-interest">
                        <span className="button">
                            <span className="cross"></span> <span className="button-text normal-text">Volgen</span><span className="button-text active-text">Ontvolgen</span>
                        </span>
                        <span className="alert" data-key="Kwartaalbericht" data-addurl="/add-alert" data-deleteurl="/delete-alert">
                            <i className="ico ico-big ico-bell-o"></i>
                            <i className="ico ico-big ico-bell"></i>
                        </span>
                    </span>
                    <a href="/tag/Kwartaalbericht" title="Kwartaalbericht" className="tag">Kwartaalbericht</a>
                </div>
            </li>
            <li>
                <div className="interest-controls-container">
                    <span className="interest" data-key="Media" data-addurl="/add-interest" data-deleteurl="/delete-interest">
                        <span className="button">
                            <span className="cross"></span> <span className="button-text normal-text">Volgen</span><span className="button-text active-text">Ontvolgen</span>
                        </span>
                        <span className="alert" data-key="Media" data-addurl="/add-alert" data-deleteurl="/delete-alert">
                            <i className="ico ico-big ico-bell-o"></i>
                            <i className="ico ico-big ico-bell"></i>
                        </span>
                    </span>
                    <a href="/tag/Media" title="Media" className="tag">Media</a>
                </div>
            </li>
            <li>
                <div className="interest-controls-container">
                    <span className="interest" data-key="Ministerie van Onderwijs, Cultuur en Wetenschap" data-addurl="/add-interest" data-deleteurl="/delete-interest">
                        <span className="button">
                            <span className="cross"></span> <span className="button-text normal-text">Volgen</span><span className="button-text active-text">Ontvolgen</span>
                        </span>
                        <span className="alert" data-key="Ministerie van Onderwijs, Cultuur en Wetenschap" data-addurl="/add-alert" data-deleteurl="/delete-alert">
                            <i className="ico ico-big ico-bell-o"></i>
                            <i className="ico ico-big ico-bell"></i>
                        </span>
                    </span>
                    <a href="/tag/Ministerie van Onderwijs, Cultuur en Wetenschap" title="Ministerie van Onderwijs, Cultuur en Wetenschap" className="tag">Ministerie van Onderwijs, Cultuur en Wetenschap</a>
                </div>
            </li>
            <li>
                <div className="interest-controls-container">
                    <span className="interest" data-key="Sanoma" data-addurl="/add-interest" data-deleteurl="/delete-interest">
                        <span className="button">
                            <span className="cross"></span> <span className="button-text normal-text">Volgen</span><span className="button-text active-text">Ontvolgen</span>
                        </span>
                        <span className="alert" data-key="Sanoma" data-addurl="/add-alert" data-deleteurl="/delete-alert">
                            <i className="ico ico-big ico-bell-o"></i>
                            <i className="ico ico-big ico-bell"></i>
                        </span>
                    </span>
                    <a href="/tag/Sanoma" title="Sanoma" className="tag">Sanoma</a>
                </div>
            </li>
            <li>
                <div className="interest-controls-container">
                    <span className="interest" data-key="Tech en media" data-addurl="/add-interest" data-deleteurl="/delete-interest">
                        <span className="button">
                            <span className="cross"></span> <span className="button-text normal-text">Volgen</span><span className="button-text active-text">Ontvolgen</span>
                        </span>
                        <span className="alert" data-key="Tech en media" data-addurl="/add-alert" data-deleteurl="/delete-alert">
                            <i className="ico ico-big ico-bell-o"></i>
                            <i className="ico ico-big ico-bell"></i>
                        </span>
                    </span>
                    <a href="/tag/Tech en media" title="Tech en media" className="tag">Tech en media</a>
                </div>
            </li>
            <li>
                <div className="interest-controls-container">
                    <span className="interest" data-key="Uitgevers" data-addurl="/add-interest" data-deleteurl="/delete-interest">
                        <span className="button">
                            <span className="cross"></span> <span className="button-text normal-text">Volgen</span><span className="button-text active-text">Ontvolgen</span>
                        </span>
                        <span className="alert" data-key="Uitgevers" data-addurl="/add-alert" data-deleteurl="/delete-alert">
                            <i className="ico ico-big ico-bell-o"></i>
                            <i className="ico ico-big ico-bell"></i>
                        </span>
                    </span>
                    <a href="/tag/Uitgevers" title="Uitgevers" className="tag">Uitgevers</a>
                </div>
            </li>
        </ul>
    </Panel>,
    aside2);
    