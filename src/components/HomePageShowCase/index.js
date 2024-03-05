import React from "react";
import styles from './styles.module.css';
import clsx from "clsx";
import CustUp from "custup";
import Link from "@docusaurus/Link";

const HomePageShowcase = React.memo(() => {

    React.useEffect(() => {
        const _inst1 = new CustUp({
            targetRootElement: "#container-1",
            position_container: "before",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
                defaultUIUploadSentenceContainer: ['sentence_container', true]
            },
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
        const _inst2 = new CustUp({
            targetRootElement: "#container-2",
            ui_type: "detached",
            position_container: "after",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
                defaultUIUploadSentenceContainer: ['sentence_container', true]
            },
            default_files: [
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
            ],
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
        const _inst3 = new CustUp({
            targetRootElement: "#container-3",
            default_styles_override: {
              outerContainer: ['custup_outer_contaner', true],
              innerContainer: ['inner_container_el', true],
              headerContainer: 'header_cont',
              footerContainer: 'footer_container',
              sidebarLeftContainer: 'side_bar_left',
              sidebarRightContainer: 'side_bar_right',
              custupInnerContainerWrapperEl: ['inner_container_wrapper', true],
              defaultUI: '',
              fileUIOuterContainer: ['file_ui_outer', true]
            },
            position_container: {"beforeEl": "#try-it-out"},
            allowed_tools: null,
            default_files: [
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
            ],
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
        const _inst4 = new CustUp({
            targetRootElement: "#container-4",
            allowed_sources: ['openai_dalle_source'],
            _custupDefaultUploadSentence: "Click the OpenAI logo below to generate images with Dalle-3, or Drag files to upload or Click to select file from device",
            default_styles_override: {
              outerContainer: ['custup_outer_contaner', true],
            },
            position_container: {"beforeEl": "#try-it-out-2"},
            allowed_tools: null,
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
        const _inst5 = new CustUp({
            targetRootElement: "#container-5",
            ui_type: "elegant",
            default_styles_override: {
              outerContainer: ['custup_outer_contaner', true],
            },
            allowed_tools: null,
            position_container: {"afterEl": "#elegant-title"},
            default_files: [
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
                {file: "https://random.imagecdn.app/1000/800", isUploadable: true},
            ],
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
        _inst4.launch_dalle_source();
    }, [])

    return (
        <div className={styles.showcaseContainer}>
            <div className={styles.h3}>
                Craft the perfect upload experience with CustUp.
                
            </div>
            <div className={styles.showcaseDescription}>
                This lightning-fast, ultra-customizable library lets you fine-tune every detail, from UI to drag-and-drop 
                workflows to progress bars, error messages and so on. Make uploading a breeze for your users!
            </div>
            <div className={styles.custupContainer1} id="container-1"></div>
            <div className={styles.custupContainer1} id="container-2">
                <div style={{width: "100%", textAlign: 'center', marginTop: 20, marginBottom: 20, fontSize: '130%', fontWeight: 'bold'}}>
                    Select the UI type that fit your project
                </div>
            </div>
            <div className={styles.custupContainer1} id="container-5">
                <div id="elegant-title" style={{width: "100%", textAlign: 'center', marginTop: 20, marginBottom: 5, fontSize: '130%', fontWeight: 'bold'}}>
                    Or Elegant UI type
                </div>
            </div>
            <div className={styles.custupContainer1} id="container-3">
                <div style={{width: "100%", textAlign: 'center', marginTop: 20, marginBottom: 20, fontSize: '130%', fontWeight: 'bold'}}>
                    Or customize it to fit your project
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 15}} id="try-it-out">
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/installation">
                        Try it out
                    </Link>
                </div>
            </div>
            <div className={styles.custupContainer1} id="container-4">
                <div style={{width: "100%", textAlign: 'center', marginTop: 20, marginBottom: 20, fontSize: '130%', fontWeight: 'bold'}}>
                    And you can also Generate images with OpenAI DALL.E <br />
                    Note this demo will not work because I didn't provide my API key as that would cost me alot :)
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 15}} id="try-it-out-2">
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/installation">
                        Try it out
                    </Link>
                </div>
            </div>

        </div>
    )
})

export default HomePageShowcase;