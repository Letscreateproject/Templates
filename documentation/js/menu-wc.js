'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dim documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' : 'data-target="#xs-components-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' :
                                            'id="xs-components-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' }>
                                            <li class="link">
                                                <a href="components/ActionBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddApplicantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddApplicantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplicantDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicantDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Dashboard2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Dashboard2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RuleBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RuleBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RuleContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RuleContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingBasketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingBasketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppinglistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppinglistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserlistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserlistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' : 'data-target="#xs-directives-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' :
                                        'id="xs-directives-links-module-AppModule-1b83ef3cca0c7ad628d5ef3a51ce51ae9cd55f6ed9c5dc03f9abc2cf48f234d3388d55ea3ff483052cf1b5bd2e09206e788d7e6a0f4d820a19c64ae77e864cc8"' }>
                                        <li class="link">
                                            <a href="directives/DndDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DndDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DownloadModule.html" data-type="entity-link" >DownloadModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedComponentModule.html" data-type="entity-link" >SharedComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedComponentModule-13ad96e7d02d776dd0a31c13d07ee0053034b2eac20f8192f2a7a193b718ab7fd87be2808a221e92f1f08134f935a04f3c8a1d98998eb34fe2d724afe3a7f89c"' : 'data-target="#xs-components-links-module-SharedComponentModule-13ad96e7d02d776dd0a31c13d07ee0053034b2eac20f8192f2a7a193b718ab7fd87be2808a221e92f1f08134f935a04f3c8a1d98998eb34fe2d724afe3a7f89c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedComponentModule-13ad96e7d02d776dd0a31c13d07ee0053034b2eac20f8192f2a7a193b718ab7fd87be2808a221e92f1f08134f935a04f3c8a1d98998eb34fe2d724afe3a7f89c"' :
                                            'id="xs-components-links-module-SharedComponentModule-13ad96e7d02d776dd0a31c13d07ee0053034b2eac20f8192f2a7a193b718ab7fd87be2808a221e92f1f08134f935a04f3c8a1d98998eb34fe2d724afe3a7f89c"' }>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommonCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommonPageHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonPageHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomSnackbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomSnackbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonSnackbarServiceService.html" data-type="entity-link" >CommonSnackbarServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadService.html" data-type="entity-link" >DownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotifierService.html" data-type="entity-link" >NotifierService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Criteria.html" data-type="entity-link" >Criteria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExpressionObjects.html" data-type="entity-link" >ExpressionObjects</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColumn.html" data-type="entity-link" >IColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RuleObj.html" data-type="entity-link" >RuleObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RuleOutputObj.html" data-type="entity-link" >RuleOutputObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserData.html" data-type="entity-link" >UserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserData-1.html" data-type="entity-link" >UserData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});