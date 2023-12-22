import React from "react";
import styles from './styles.module.css';
import clsx from "clsx";
import CustUp from "custup/src/custup.min";
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
                endpoint_url: 'http://api.pryxy.com/fileupload',
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
                endpoint_url: 'http://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
        const _inst3 = new CustUp({
            targetRootElement: "#container-3",
            allowed_sources: null,
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
                endpoint_url: 'http://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
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
                <div style={{width: "100%", textAlign: 'center', marginTop: 20, marginBottom: 20}}>
                    Select the UI type that fit your project
                </div>
            </div>
            <div className={styles.custupContainer1} id="container-3">
                <div style={{width: "100%", textAlign: 'center', marginTop: 20, marginBottom: 20}}>
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

        </div>
    )
})

export default HomePageShowcase;