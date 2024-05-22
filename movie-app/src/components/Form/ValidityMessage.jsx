export default function ValidityMessage({ isValid, children }) {

    if (!isValid)
        return (
            <div style={{ height: '0px', display: 'block', 'margin': '0', color: 'red' }}>
                {children}
            </div>
        )
}
