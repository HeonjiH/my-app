'use client'

import { Add, Copy, Cut, Edit, FolderShared, Notification, Paste, TextBold, TextItalic, TrashCan } from "@carbon/icons-react";
import { Breadcrumb, BreadcrumbItem, Button, Checkbox, CheckboxGroup, ComboBox, DatePicker, DatePickerInput, Dropdown, 
    FileUploader, Form, FormGroup, FormLabel, IconButton, InlineLoading, MenuItemRadioGroup, Menu, MenuItem, RadioButton, RadioButtonGroup, Search, Stack, 
    MenuItemDivider, MenuItemSelectable, MenuItemGroup, Modal, TextInput, ComposedModal, ModalHeader, ModalBody, ModalFooter, MultiSelect, OverflowMenu, OverflowMenuItem, 
    Pagination, PasswordInput, ProgressIndicator, ProgressStep, ButtonSet, ExpandableSearch, Tabs, TabList, Tab, TabPanels, TabPanel, 
    DismissibleTag, TextArea} from "@carbon/react";
import { MouseEventHandler, useEffect, useState } from "react";

export default function Page(){
    const comboBoxItems = [
        {id:'option-0', text:'Example'},
        {id:'option-1', text:'Example1'},
        {id:'option-2', text:'Example2'},
        {id:'option-3', text:'Example3'},
        {id:'option-4', text:'Example4'},
        {id:'option-5', text:'Example5', disabled: true},
    ];
    const tags = [
        {type:'warm-gray', text:'태그1', tagTitle:'태그1'},
        {type:'high-contrast', text:'태그2', tagTitle:'태그2'},
        {type:'outline', text:'태그3', tagTitle:'태그3'},
        {type:'purple', text:'태그4', tagTitle:'태그4'},
    ]
    const [menuTarget, setMenuTarget] = useState<HTMLElement | null>(null);
    const [menuPosition, setMenuPosition] = useState<{x:number, y:number} | null>({x:0, y:0});
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [radioValue, setRadioValue] = useState<string>("");
    const [renderedTags, setRenderedTags] = useState<{type:string, text:string, tagTitle:string}[]>(tags);
      
    const handleComboBox = (selectedItem: object) => {
        console.log(selectedItem);
    }
    const handleClickMenuOpenBtn:React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setMenuPosition({x:event.pageX, y:event.pageY});
        setIsOpen(!isOpen);
    }
    const handleClickOpenModal:MouseEventHandler<HTMLButtonElement> = () => setIsModalOpen(!isModalOpen);
    const handleChangeSelection = (selectedItem:{id:string, text:string}[]) => {
        console.log(selectedItem);
    }
    const handleChangePagination = (event:object) => {
        console.log(event);
    }
    const handleChangeProgressIndicator = (index:number) => {
        setCurrentIndex(index);
    }
    const handleChangeRadio = (value:string|number) => {
        setRadioValue(value as string);
    }
    const handleTagCloseBtn = (tag:{type:string; text:string; tagTitle:string;}) => setRenderedTags(renderedTags.filter(t => t.text !== tag.text));

    useEffect(() => {
        const elem = document.getElementById("storybook-root");
        if(elem){
            setMenuTarget(elem);
        }
    }, [])
        
    return (
        <Stack gap={9}>
            <h1>Carbon Design Test</h1>

            {/* breadcrumb */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Breadcrumb</h2>
                <Breadcrumb>
                    <BreadcrumbItem href="/">기본 페이지</BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>현재 페이지</BreadcrumbItem>
                </Breadcrumb>
            </div>

            <hr/>

            {/* Button */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Button</h2>
                <Button renderIcon={Add} onClick={() => alert("hello")}>버튼 테스트</Button>
                <Button renderIcon={Add} tooltipAlignment="start" iconDescription="Add Icon" hasIconOnly onClick={() => alert("icon only")} />
            </div>

            <hr/>

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

            <hr/>

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

            <hr/>

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

            <hr/>

            {/* Dropdown */}
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h2>Dropdown</h2>
                <Dropdown id="default" autoAlign={true} titleText="Dropdown label" helperText="This is some helper text" 
                    label="Choose an option" items={comboBoxItems} itemToString={item => item ? item.text : ''}  />
            </div>

            <hr/>

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

            <hr/>

            {/* InlineLoading */}
            <Stack gap={3}>
                <h2>InlineLoading</h2>
                <InlineLoading/>
            </Stack>

            <hr/>

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
                                        <MenuItemRadioGroup label='Share with' items={["None", "Product team", "Organization", "Company"]} defaultSelectedItem={"Product team"}/>
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

            <hr/>

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

            <hr/>

            {/* Modal-알림용 */}
            <Stack gap={3}>
                <h2>Modal-알림용</h2>
                <Button onClick={handleClickOpenModal} size='md'>Modal-알림용 Open</Button>
                <Modal open={isModalOpen} size='sm' modalHeading="알림" aria-label="Modal content" primaryButtonText="확인" secondaryButtonText="취소" onRequestClose={() => setIsModalOpen(false)}>
                    <p>
                        알림용으로 쓸 모달 테스트
                    </p>
                </Modal>
            </Stack>

            <hr/>
            
            {/* MultiSelect */}
            <Stack gap={3}>
                <h2>MultiSelect</h2>
                <MultiSelect label="Multiselect Label" 
                    id="carbon-multiselect-example" 
                    titleText="Multiselect title" 
                    helperText="This is helper text" 
                    items={comboBoxItems}
                    itemToString={item => item ? item.text : ''}
                    selectionFeedback="top-after-reopen"
                    autoAlign
                    onChange={data => handleChangeSelection(data.selectedItems)}/>
            </Stack>

            <hr/>

            {/* OverflowMenu */}
            <Stack gap={3}>
                <h2>OverflowMenu</h2>
                <OverflowMenu aria-label="overflow-menu" size='md'>
                    <OverflowMenuItem itemText="상세보기"/>
                    <OverflowMenuItem itemText="현행버전 선택"/>
                    <OverflowMenuItem itemText="삭제하기"/>
                </OverflowMenu>
            </Stack>

            <hr/>

            {/* Table Pagination */}
            <Stack gap={3}>
                <h2>Pagination (Table)</h2>
                <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={120} onChange={handleChangePagination}/>
            </Stack>

            <hr/>

            {/* PasswordInput */}
            <Stack gap={3}>
                <h2>PasswordInput</h2>
                <PasswordInput id="pwd-input-1" labelText="Password Input label" autoComplete="true"/>
            </Stack>

            <hr/>

            {/* ProgressIndicator */}
            <Stack gap={7}>
                <h2>ProgressIndicator</h2>
                <Stack gap={5}>
                    <ProgressIndicator currentIndex={currentIndex} onChange={handleChangeProgressIndicator}>
                        <ProgressStep label="기본 정보"/>
                        <ProgressStep label="시나리오"/>
                        <ProgressStep label="사용자 초대하기"/>
                        <ProgressStep label="연동하기"/>
                        <ProgressStep label="테스트하기"/>
                    </ProgressIndicator>
                    
                    <ButtonSet>
                        <Button kind='secondary' onClick={() => setCurrentIndex(prev => prev > 0 ? prev -=1 : prev)}>이전</Button>
                        <Button onClick={() => setCurrentIndex(prev => prev < 4 ? prev+=1 : prev)}>다음</Button>
                    </ButtonSet>
                </Stack>
            </Stack>

            <hr/>

            {/* RadioButton */}
            <Stack gap={5}>
                <h2>RadioButton</h2>
                <p>{radioValue}</p>
                <RadioButtonGroup legendText="Radio Button Group" name='radio-button-default-group' orientation="vertical" onChange={e => handleChangeRadio(e)}>
                    <RadioButton labelText='Radio button label' value='radio-1'/>
                    <RadioButton labelText='Radio button label' value='radio-2'/>
                    <RadioButton labelText='Radio button label' value='radio-3'/>
                </RadioButtonGroup>
            </Stack>

            <hr/>

            {/* Search */}
            <Stack gap={4}>
                <h2>Search</h2>
                <p>Default</p>
                <Search labelText="Search" placeholder="Search"/>
                <p>Expandable (Table에서 사용 가능)</p>
                <ExpandableSearch labelText="Search" placeholder="Search" closeButtonLabelText="Clear search input"/>
            </Stack>

            <hr/>

            {/* Tabs */}
            <Stack gap={5}>
                <h2>Tabs</h2>
                <Tabs>
                    <TabList>
                        <Tab>채팅룸 기본정보</Tab>
                        <Tab>시나리오</Tab>
                        <Tab>초대된 에이전트</Tab>
                        <Tab>초대된 사용자</Tab>
                        <Tab>연동 정보</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab Panel1</TabPanel>
                        <TabPanel>Tab Panel2</TabPanel>
                        <TabPanel>Tab Panel3</TabPanel>
                        <TabPanel>Tab Panel4</TabPanel>
                        <TabPanel>Tab Panel5</TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>

            <hr/>

            {/* Tag */}
            <Stack gap={4}>
                <h2>Tag</h2>
                <div aria-label='Dismissible tags' role='group'>
                    {
                        renderedTags.map((tag:{type:string; text:string; tagTitle:string;}, index:number) => 
                            <DismissibleTag key={index} type={tag.type} text={tag.text} tagTitle={tag.tagTitle} onClose={() => handleTagCloseBtn(tag)} />
                        )
                    }
                </div>
            </Stack>

            <hr/>
            
            <Stack gap={4}>
                <h2>TextInput, TextArea</h2>
                <TextInput id='must-have-id' labelText="TextInput Test" placeholder="TextInput"/>
                <TextArea id='text-area' labelText='TextArea Test'/>
            </Stack>

            <hr/>

            <Stack gap={4}>
                <h2>Toggle</h2>
                {/* <Toggle labelText="Label" labelA="Off" labelB="On" defaultToggled id="toggle"/> */}
            </Stack>

            <hr/>

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
        </Stack>
    )
}