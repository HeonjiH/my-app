'use client'

import { Add, Copy, Cut, Edit, FolderShared, Notification, Paste, TextBold, TextItalic, TrashCan } from "@carbon/icons-react";
import { Breadcrumb, BreadcrumbItem, Button, Checkbox, CheckboxGroup, ComboBox, DatePicker, DatePickerInput, Dropdown, FileUploader, Form, FormGroup, FormLabel, IconButton, InlineLoading, MenuItemRadioGroup, Menu, MenuItem, RadioButton, RadioButtonGroup, Search, Stack, MenuItemDivider, MenuItemSelectable, MenuItemGroup, Modal, TextInput, ComposedModal, ModalHeader, ModalBody, ModalFooter } from "@carbon/react";
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";

export default function Page(){
    const comboBoxItems = [
        {id:'option-0', text:'Example'},
        {id:'option-1', text:'Example1'},
        {id:'option-2', text:'Example2'},
        {id:'option-3', text:'Example3'},
        {id:'option-4', text:'Example4'},
        {id:'option-5', text:'Example5', disabled: true},
    ];
    const [menuTarget, setMenuTarget] = useState<HTMLElement | null>(null);
    const [menuPosition, setMenuPosition] = useState<{x:number, y:number} | null>({x:0, y:0});
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
      
    const handleComboBox = (selectedItem: any) => {
        console.log(selectedItem);
    }
    const handleMenuRadioChange:ChangeEventHandler<HTMLLIElement> = (event) => {
        console.log(event);

    }
    const handleClickMenuOpenBtn:React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setMenuPosition({x:event.pageX, y:event.pageY});
        setIsOpen(!isOpen);
    }
    const handleClickOpenModal:MouseEventHandler<HTMLButtonElement> = (event) => setIsModalOpen(!isModalOpen);

    useEffect(() => {
        let elem = document.getElementById("storybook-root");
        if(elem){
            setMenuTarget(elem);
        }
    }, [])
        
    return (
        <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
            <h1>Carbon Design Test</h1>

            {/* breadcrumb */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Breadcrumb</h2>
                <Breadcrumb>
                    <BreadcrumbItem href="/">기본 페이지</BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>현재 페이지</BreadcrumbItem>
                </Breadcrumb>
            </div>

            {/* Button */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Button</h2>
                <Button renderIcon={Add} onClick={() => alert("hello")}>버튼 테스트</Button>
                <Button renderIcon={Add} tooltipAlignment="start" iconDescription="Add Icon" hasIconOnly onClick={() => alert("icon only")} />
            </div>

            {/* Checkbox */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Checkbox</h2>
                <CheckboxGroup legendText="Group Label">
                    <Checkbox labelText="label Text" id="must-have"/>
                    <Checkbox labelText="label Text2" id="must-have2"/>
                </CheckboxGroup>
                <CheckboxGroup orientation="horizontal" legendText="Group Label">
                    <Checkbox labelText="label Text" id="must-have4"/>
                    <Checkbox labelText="label Text2" id="must-have3"/>
                </CheckboxGroup>
                
                <Checkbox id="checkbox-3" labelText="test" helperText="Helper text goes here" />
            </div>

            {/* ComboBox */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>ComboBox</h2>
                <ComboBox id='carbon-combobox' 
                    items={comboBoxItems} 
                    itemToString={item => item ? item.text : ''} 
                    titleText='ComboBox' 
                    onChange={handleComboBox} 
                    autoAlign={true} typeahead/>
            </div>

            {/* DatePicker */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>DatePicker</h2>
                <DatePicker datePickerType="single">
                    <DatePickerInput placeholder="mm/dd/yyyy" id="" labelText={"Single"} hideLabel/>
                </DatePicker>
                <DatePicker datePickerType="range" locale="ko">
                    <DatePickerInput id="date-picker-input-id-start" placeholder="mm-dd-yyyy" labelText={"Start date"}/>
                    <DatePickerInput id="date-picker-input-id-finish" placeholder="mm-dd-yyyy" labelText={"End date"}/>
                </DatePicker>
            </div>

            {/* Dropdown */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Dropdown</h2>
                <Dropdown id="default" autoAlign={true} titleText="Dropdown label" helperText="This is some helper text" 
                    label="Choose an option" items={comboBoxItems} itemToString={item => item ? item.text : ''}  />
            </div>

            {/* IconButton */}
            <div>
                <h2>IconButton</h2>
                <IconButton label='edit'>
                    <Edit/>
                </IconButton>
                <IconButton label='Notification' kind='ghost' size='lg' autoAlign badgeCount={5}>
                    <Notification/>
                </IconButton>
            </div>

            {/* InlineLoading */}
            <Stack gap={3}>
                <h2>InlineLoading</h2>
                <InlineLoading/>
            </Stack>

            {/* Menu */}
            <Stack gap={3}>
                <h2>Menu, MenuItem, MenuItemRadioGroup, MenuItemSelectable, MenuItemDivider</h2>
                <div id="storybook-root">
                    <Button onClick={handleClickMenuOpenBtn} size='md'>Menu Open</Button>
                    {
                        menuTarget && (
                            <div>
                                <Menu target={menuTarget} x={menuPosition.x} y={menuPosition.y} label='menu' open={isOpen}>
                                    <MenuItem label="Share with" renderIcon={FolderShared}>
                                        <MenuItemRadioGroup label='Share with' items={["None", "Product team", "Organization", "Company"]} defaultSelectedItem={"Product team"} onChange={handleMenuRadioChange}/>
                                    </MenuItem>
                                    <MenuItemDivider/>
                                    <MenuItem label="Cut" renderIcon={Cut}/>
                                    <MenuItem label="Copy" renderIcon={Copy}/>
                                    <MenuItem label="Paste" renderIcon={Paste}/>
                                    <MenuItemDivider/>
                                    <MenuItemGroup label="Font Style">
                                        <MenuItemSelectable label="Bold" defaultSelected renderIcon={TextBold}/>
                                        <MenuItemSelectable label="Italic" renderIcon={TextItalic}/>
                                    </MenuItemGroup>
                                    <MenuItemDivider/>
                                    <MenuItem label="Delete" renderIcon={TrashCan} kind='danger'/>
                                </Menu>
                            </div>
                        )
                    }
                </div>
            </Stack>

            {/* Modal */}
            <Stack gap={3}>
                <h2>Modal</h2>
                <Button size='md'>Modal Open</Button>
                {/* <Modal open={isModalOpen} modalHeading="Add a custom domain" aria-label="Modal content" primaryButtonText="확인" secondaryButtonText="취소" onRequestClose={e => setIsModalOpen(false)}>
                    <Stack gap={3}>
                        <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a URL that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
                        <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a URL that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
                        <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a URL that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
                        <TextInput data-modal-primary-focus id="text-input-1" labelText="Domain Name" placeholder="e.g. github.com"/>
                    </Stack>
                </Modal> */}
                <ComposedModal>
                    <ModalHeader>Add a custom domain</ModalHeader>
                    <ModalBody>
                        <Stack gap={3}>
                            <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a URL that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
                            <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a URL that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
                            <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a URL that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
                            <TextInput data-modal-primary-focus id="text-input-1" labelText="Domain Name" placeholder="e.g. github.com"/>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button kind='secondary' size='sm' onClick={() => setIsModalOpen(false)}>취소</Button>
                        <Button kind='primary' size='sm'>확인</Button>
                    </ModalFooter>
                </ComposedModal>
            </Stack>

            {/* Modal-알림용 */}
            <Stack gap={3}>
                <h2>Modal-알림용</h2>
                <Button onClick={handleClickOpenModal} size='md'>Modal-알림용 Open</Button>
                <Modal open={isModalOpen} size='sm' modalHeading="알림" aria-label="Modal content" primaryButtonText="확인" secondaryButtonText="취소" onRequestClose={e => setIsModalOpen(false)}>
                    <p>
                        알림용으로 쓸 모달 테스트
                    </p>
                </Modal>
            </Stack>
            
            {/* MultiSelect */}

            {/* FormGroup, Form, FormLabel TextInput, TextArea, PasswordInput, FileUploader */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>FormGroup, Form, FormLabel TextInput, TextArea, PasswordInput, FileUploader</h2>
                <Form aria-label="sample form">
                    <Stack gap={5}>
                        <FormLabel>Form Label</FormLabel>
                        <FormGroup className="form-group-test" legendText="Checkboxes">
                            <Checkbox defaultChecked labelText="Checkbox label" id="checkbox-0"/>
                            <Checkbox labelText="Checkbox label" id="checkbox-1"/>
                            <Checkbox  labelText="Checkbox label" id="checkbox-2"/>
                        </FormGroup>
                        <FormGroup className="some-class" legendText="File Uploader">
                            <FileUploader id="file-1" role="button" labelDescription="Max file size is 500 MB. Only .jpg files are supported." 
                            buttonLabel="Add File" buttonKind="primary" filenameStatus="edit" accept={['.jpg', '.jpeg']} multiple={true} iconDescription="Dismiss file" name=''/>
                        </FormGroup>
                        <RadioButtonGroup name='radio-button-group' defaultSelected='default-selected' legendText='Radio Button heading'>
                            <RadioButton value='standard' id='radio-1' labelText='Standard Radio Button'/>
                            <RadioButton value='default-selected' id='radio-2' labelText='Default Selected Radio Button'/>
                            <RadioButton value='blue' id='radio-3' labelText='Blue Radio Button'/>
                        </RadioButtonGroup>
                        <FormGroup legendText='Search'>
                            <Search size='md' id='search-1' labelText='Search' placeholder='Search'/>
                        </FormGroup>
                    </Stack>
                </Form>
            </div>
        </div>
    )
}