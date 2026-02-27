import { Button } from "@/registry/react/components/button";
import {
	Drawer,
	DrawerBody,
	DrawerClose,
	DrawerContent,
	DrawerContentInner,
	DrawerFooter,
	DrawerHeader,
	DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
	Field,
	FieldGroup,
	FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
	<Drawer>
		<DrawerTrigger asChild>
			<Button variant="outline">Open</Button>
		</DrawerTrigger>
		<DrawerContent variant="inset">
			<DrawerContentInner>
				<DrawerHeader
					description="On larger screens, the drawer appears with rounded corners and padding."
					title="Inset drawer"
				/>
				<DrawerBody>
					<FieldGroup>
						<Field>
							<FieldLabel>Name</FieldLabel>
							<Input defaultValue="Vinicius Vicentini" />
						</Field>
						<Field>
							<FieldLabel>Email</FieldLabel>
							<Input defaultValue="vinicius@example.com" />
						</Field>
					</FieldGroup>
				</DrawerBody>
			</DrawerContentInner>
			<DrawerFooter>
				<DrawerContentInner>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
					<DrawerClose asChild>
						<Button>Save</Button>
					</DrawerClose>
				</DrawerContentInner>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default Example;
